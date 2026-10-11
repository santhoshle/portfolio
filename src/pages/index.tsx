import type { GetStaticProps } from 'next';
import data from '../data/data.json';
import About from '../components/About';
import { renderMarkdown } from '../lib/markdown';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      about: data.about.map(renderMarkdown),
    },
  };
};

export default function AboutPage({ about }: { about: string[] }) {
  return <About about={about} />;
}
