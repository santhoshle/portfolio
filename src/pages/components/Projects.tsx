import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link: string;
  icon: string;
}

interface ProjectProps {
  projects: Project[];
}

export default function Projects({ projects = [] }: ProjectProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl pb-4 font-bold text-primary">Projects</h2>
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="bg-card p-4 rounded-lg shadow"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
          <p className="text-gray-300 mt-2">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary underline mt-2 inline-block"
          >
            View Project
          </a>
        </motion.div>
      ))}
    </section>
  );
}