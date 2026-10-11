import type { GetStaticProps } from 'next';
import data from '../data/data.json';
import { Project } from '../types';
import Projects from '../components/Projects';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: data.projects,
    },
  };
};

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  return <Projects projects={projects} />;
}
