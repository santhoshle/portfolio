import fs from 'fs';
import path from 'path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import { BlogPostMeta, BlogPost } from '../types';

// Posts are Markdown files in src/content/blog; the file name is the slug.
// Only call these from getStaticProps / getStaticPaths (they read the file system).
const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

const WORDS_PER_MINUTE = 200;

type FrontmatterValue = string | boolean | string[];

const unquote = (value: string) => value.replace(/^(["'])(.*)\1$/, '$2');

// Parses the small frontmatter subset posts use: `key: value` lines where a value
// is a (optionally quoted) string, true/false, or an inline list like ["a", "b"].
function parseFrontmatter(source: string): { data: Record<string, FrontmatterValue>; body: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: source };

  const data: Record<string, FrontmatterValue> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const pair = line.match(/^(\w+):\s*(.*)$/);
    if (!pair) continue;
    const [, key, raw] = pair;
    const value = raw.trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((item) => unquote(item.trim()))
        .filter(Boolean);
    } else if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    } else {
      data[key] = unquote(value);
    }
  }
  return { data, body: source.slice(match[0].length) };
}

function readPost(slug: string): BlogPost {
  const source = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8');
  const { data, body } = parseFrontmatter(source);

  if (typeof data.title !== 'string' || typeof data.date !== 'string' || isNaN(Date.parse(data.date))) {
    throw new Error(`Blog post "${slug}.md" needs a title and a valid date (YYYY-MM-DD) in its frontmatter`);
  }

  const words = body.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: data.title,
    description: typeof data.description === 'string' ? data.description : '',
    date: data.date,
    tags: Array.isArray(data.tags) ? data.tags : [],
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    // Rendered at build time so react-markdown never ships to the browser
    html: renderToStaticMarkup(createElement(ReactMarkdown, null, body)),
  };
}

function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

// Published posts, newest first
export function getAllPosts(): BlogPost[] {
  return getSlugs()
    .map(readPost)
    .filter((post) => !post.draft)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPostMetas(): BlogPostMeta[] {
  return getAllPosts().map(({ slug, title, description, date, tags, draft, readingMinutes }) => ({
    slug, title, description, date, tags, draft, readingMinutes,
  }));
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
