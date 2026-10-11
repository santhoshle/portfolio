import React from 'react';

interface Experience {
  company: string;
  role: string;
  years: string;
  // HTML rendered from data.json markdown at build time
  description: string;
  skills: string[];
}

interface ExperienceProps {
  experience: Experience[];
}

export default function Experience({ experience = [] }: ExperienceProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl pb-4 font-bold text-primary">Experience</h2>
      {experience.map((exp, idx) => (
        <div
          key={idx}
          className="bg-card p-4 rounded-lg shadow hover-lift"
        >
          <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
          <p className="text-gray-400">{exp.company} | {exp.years}</p>
          <div className="mt-2 text-gray-300" dangerouslySetInnerHTML={{ __html: exp.description }} />
          <div className="mt-2 flex flex-wrap gap-2">
            {exp.skills.map((skill, sidx) => (
              <span key={sidx} className="bg-accent text-white text-sm px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}