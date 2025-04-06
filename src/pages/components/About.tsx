import React from 'react';
import MarkdownWrapper from './MarkdownWrapper';

interface AboutProps {
  about: string[];
}



export default function About({ about = [] }: AboutProps) {
  return (
    <section className="space-y-4">
      {about.map((para, idx) => (
        <div key={idx} className="text-lg leading-relaxed">
          <MarkdownWrapper content={para} />
        </div>
      ))}
    </section>
  );
}