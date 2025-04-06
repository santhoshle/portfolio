import React from 'react';
import * as Icons from 'react-icons/fa';

interface FooterProps {
  links: { name: string; icon: string; url: string }[];
  name: string
}

export default function Footer({ links, name }: FooterProps) {
  return (
    <footer className="mt-16 text-center">
      <div className="flex justify-center gap-6">
        {links.map((link, idx) => {
          const IconComponent = Icons[link.icon as keyof typeof Icons];
          return (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {IconComponent && <IconComponent size={24} className="text-text" />}
            </a>
          );
        })}
      </div>
      <p className="mt-4 text-gray-500">© {new Date().getFullYear()} {name}</p>
    </footer>
  );
}
