import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PERSONAS, STATUSES, RoadmapEntry } from './meta';

const PLACEHOLDER = '/placeholder.svg';

export default function RoadmapCard({ item }: { item: RoadmapEntry }) {
  const status = STATUSES[item.statusKey];
  const persona = PERSONAS[item.personaKey];
  const StatusIcon = status.icon;
  const PersonaIcon = persona.icon;

  return (
    <article
      className={`palette-${item.personaKey} hover-lift overflow-hidden text-left rounded-lg shadow bg-[var(--rm-panel)] text-[var(--rm-text)] border border-[var(--rm-border)] border-t-4 border-t-[var(--rm-primary)]`}
    >
      {/* Image paths come from roadmap.json and may be external */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="block w-full aspect-video object-cover border-b border-[var(--rm-border)]"
        src={item.image || PLACEHOLDER}
        alt={item.title}
        loading="lazy"
        onError={(e) => {
          if (!e.currentTarget.src.endsWith(PLACEHOLDER)) e.currentTarget.src = PLACEHOLDER;
        }}
      />
      <div className="p-4 md:px-6 md:pt-5 md:pb-6">
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          {/* Only needed when the year column is hidden (mobile) */}
          {item.year && (
            <span className="md:hidden font-primary font-bold text-sm text-[var(--rm-primary)]">{item.year}</span>
          )}
          <span
            className={`status-${item.statusKey} inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-semibold whitespace-nowrap bg-[var(--rm-status)] text-[var(--rm-panel)]`}
          >
            <StatusIcon className={status.spin ? 'animate-spin' : undefined} /> {status.label}
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[var(--rm-muted)]" title={persona.tagline}>
            <PersonaIcon className="text-[var(--rm-primary)]" /> {item.author || persona.label}
          </span>
        </div>

        <h3 className="mt-3.5 mb-1.5 text-xl font-semibold font-primary text-[var(--rm-primary)]">{item.title}</h3>
        {item.summary && <p className="leading-relaxed text-[var(--rm-body)]">{item.summary}</p>}

        {(item.demoUrl || item.repoUrl) && (
          <div className="flex flex-wrap gap-2.5 mt-5 text-sm font-semibold">
            {item.demoUrl && (
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded transition-colors bg-[var(--rm-primary)] text-[var(--rm-on-primary)] hover:bg-[var(--rm-secondary)]"
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt /> Demo / Docs
              </a>
            )}
            {item.repoUrl && (
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded transition-colors border border-[var(--rm-border)] hover:border-[var(--rm-secondary)] hover:text-[var(--rm-secondary)]"
                href={item.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
