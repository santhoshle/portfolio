import React from 'react';
import type { IconType } from 'react-icons';
import { FaCodepen, FaGithub, FaItchIo, FaLinkedinIn } from 'react-icons/fa';

// Icons available to socialLinks in data.json. Import only what's used:
// `import * as Icons` pulls the whole Font Awesome set into the bundle.
const ICONS: Record<string, IconType> = { FaCodepen, FaGithub, FaItchIo, FaLinkedinIn };

interface FooterProps {
  links: { name: string; icon: string; url: string }[];
  name: string
}

export default function Footer({ links = [], name = '' }: FooterProps) {
  return (
    <footer className="mt-16 text-center">
      <div className="flex justify-center gap-6">
        {links.map((link, idx) => {
          const IconComponent = ICONS[link.icon];
          return (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
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
