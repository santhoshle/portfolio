import type { GetStaticProps } from 'next';
import roadmap from '../data/roadmap.json';
import { RoadmapItem } from '../types';
import Roadmap from '../components/roadmap/Roadmap';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      items: roadmap,
    },
  };
};

export default function RoadmapPage({ items }: { items: RoadmapItem[] }) {
  return <Roadmap items={items} />;
}
