import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import data from '../../data/data.json';
import { BlogPost } from '../../types';
import { getAllPosts, getPost } from '../../lib/blog';
import { formatPostDate } from '../../components/blog/formatDate';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPost(params?.slug as string);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <article>
      <Head>
        <title>{`${post.title} | ${data.intro.name}`}</title>
        {post.description && <meta name="description" content={post.description} />}
      </Head>

      <Link href="/blog" className="text-sm text-gray-400 hover:text-primary">
        ← Blog
      </Link>
      <p className="text-sm text-gray-400 mt-4">
        {formatPostDate(post.date, 'long')} · {post.readingMinutes} min read
      </p>
      <h2 className="text-3xl font-bold font-primary text-primary mt-1">{post.title}</h2>

      <div className="post-body mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-accent">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?q=${encodeURIComponent(tag)}`}
              className="text-xs px-2 py-1 rounded border border-accent text-primary hover:border-primary"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
