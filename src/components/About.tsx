import React from 'react';

interface AboutProps {
  // HTML rendered from data.json markdown at build time
  about: string[];
}

export default function About({ about = [] }: AboutProps) {
  return (
    <section className="space-y-4">
      {about.map((para, idx) => (
        <div key={idx} className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: para }} />
      ))}
    </section>
  );
}
