import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BlogPostMeta } from '../../types';
import { formatPostDate } from './formatDate';

interface PostListProps {
  posts: BlogPostMeta[];
}

// Every whitespace-separated term must appear in the title, description or tags
function matches(post: BlogPostMeta, terms: string[]) {
  const haystack = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

export default function PostList({ posts }: PostListProps) {
  const router = useRouter();
  // Until the visitor types, the search comes from the URL: tag links on post pages land here as /blog?q=<tag>
  const [typed, setQuery] = useState<string | null>(null);
  const fromUrl = typeof router.query.q === 'string' ? router.query.q : '';
  const query = typed ?? fromUrl;

  const filtered = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return terms.length ? posts.filter((post) => matches(post, terms)) : posts;
  }, [posts, query]);

  return (
    <div className="space-y-4">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts by title, description or tag"
        aria-label="Search posts"
        className="w-full bg-card text-text placeholder:text-gray-400 px-4 py-2 rounded-lg outline-none ring-1 ring-accent focus:ring-primary"
      />

      {query.trim() && (
        <p className="text-sm text-gray-400" role="status">
          {filtered.length} match{filtered.length === 1 ? '' : 'es'}
        </p>
      )}

      {filtered.map((post) => (
        <article key={post.slug} className="bg-card p-4 rounded-lg shadow hover-lift">
          <p className="text-sm text-gray-400">
            {formatPostDate(post.date)} · {post.readingMinutes} min read
          </p>
          <h3 className="text-xl font-semibold text-primary mt-1">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          {post.description && <p className="text-gray-300 mt-2">{post.description}</p>}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="text-xs px-2 py-1 rounded border border-accent text-primary hover:border-primary cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </article>
      ))}

      {filtered.length === 0 && (
        <p className="text-gray-400">{query.trim() ? `No posts match "${query}".` : 'No posts yet — check back soon.'}</p>
      )}
    </div>
  );
}
