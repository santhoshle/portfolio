import type { GetStaticProps } from 'next';
import { BlogPostMeta } from '../../types';
import { getPostMetas } from '../../lib/blog';
import PostList from '../../components/blog/PostList';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getPostMetas(),
    },
  };
};

export default function BlogPage({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section>
      <h2 className="text-2xl pb-4 font-bold text-primary">Blog</h2>
      <PostList posts={posts} />
    </section>
  );
}
