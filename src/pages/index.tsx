import { useState, useRef } from 'react';
import type { GetStaticProps } from 'next';
import data from '../data/data.json';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CursorSpotlight from './components/CursorSpotlight';
import useSectionObserver from '../hooks/useSectionObserver';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef
  };

  useSectionObserver(sectionRefs, setActiveSection);

  const scrollToSection = (id: string) => {
    const target = sectionRefs[id]?.current;
    if (!target) return;
  
    const elementTop = target.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerHeight / 4; // center of screen
    const scrollTarget = elementTop - offset;
  
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <CursorSpotlight />
      <motion.div
        className="relative min-h-screen px-4 py-8 font-secondary bg-background text-text z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header
          data={data?.intro}
          activeSection={activeSection}
          setActiveSection={scrollToSection}
        />

        <main className="max-w-5xl mx-auto space-y-12 mt-4">
          <section id="about" ref={aboutRef}>
            <About about={data?.about} />
          </section>
          <section id="experience" ref={experienceRef}>
            <Experience experience={data?.experience} />
          </section>
          <section id="projects" ref={projectsRef}>
            <Projects projects={data?.projects} />
          </section>
        </main>

        <Footer links={data?.socialLinks} name={data?.intro?.name} />
      </motion.div>
    </>
  );
}
