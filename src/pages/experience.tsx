import type { GetStaticProps } from 'next';
import data from '../data/data.json';
import { ExperienceItem } from '../types';
import Experience from '../components/Experience';
import { renderMarkdown } from '../lib/markdown';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      experience: data.experience.map((exp) => ({ ...exp, description: renderMarkdown(exp.description) })),
    },
  };
};

export default function ExperiencePage({ experience }: { experience: ExperienceItem[] }) {
  return <Experience experience={experience} />;
}
