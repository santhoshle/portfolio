import React, { useMemo, useState } from 'react';
import { RoadmapItem } from '../../types';
import RoadmapCard from './RoadmapCard';
import { PERSONAS, STATUSES, StatusKey, toEntries } from './meta';

type Filter = 'all' | StatusKey;

const filterOptions: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  ...(Object.keys(STATUSES) as StatusKey[]).map((value) => ({ label: STATUSES[value].label, value })),
];

export default function Roadmap({ items = [] }: { items: RoadmapItem[] }) {
  const [filter, setFilter] = useState<Filter>('all');
  const entries = useMemo(() => toEntries(items), [items]);
  const visible = entries.filter((e) => filter === 'all' || e.statusKey === filter);

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl pb-2 font-bold text-primary">Roadmap</h2>
        <p className="text-lg text-gray-400">
          What I&apos;m building now and what&apos;s next — across identity &amp; access management consulting, indie
          software engineering and solo game development.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(PERSONAS).map(([key, p]) => {
          const Icon = p.icon;
          return (
            <a
              key={key}
              href={p.site}
              target="_blank"
              rel="noopener noreferrer"
              className={`palette-${key} flex items-center gap-3.5 px-5 py-3.5 rounded-lg shadow bg-[var(--rm-panel)] border border-[var(--rm-border)] border-l-4 border-l-[var(--rm-primary)]`}
            >
              <Icon size={24} className="text-[var(--rm-primary)]" />
              <span className="flex flex-col">
                <strong className="font-primary text-[var(--rm-primary)]">{p.label}</strong>
                <small className="text-[var(--rm-muted)]">{p.tagline}</small>
              </span>
            </a>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center" role="group" aria-label="Filter by status">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            aria-pressed={filter === opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-4 py-2 text-sm border first:rounded-l last:rounded-r -ml-px first:ml-0 transition-colors ${
              filter === opt.value
                ? 'bg-primary border-primary text-card font-semibold'
                : 'bg-card border-accent text-gray-300 hover:bg-accent hover:text-text'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-gray-400">No projects match these filters.</p>
      ) : (
        // Alternating timeline on desktop; single column with the year inside the card on mobile.
        <ol>
          {visible.map((item, idx) => {
            const left = idx % 2 === 1;
            const status = STATUSES[item.statusKey];
            const StatusIcon = status.icon;
            return (
              <li
                key={`${item.title}-${idx}`}
                className={`palette-${item.personaKey} grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-6`}
              >
                <div className={`hidden md:block ${left ? 'md:order-3 text-left' : 'md:order-1 text-right'}`}>
                  {item.year && (
                    <span className="inline-block mt-1.5 text-2xl font-bold font-primary text-[var(--rm-primary)]">
                      {item.year}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-center md:order-2">
                  <span
                    className={`status-${item.statusKey} flex items-center justify-center w-10 h-10 rounded-full bg-[var(--rm-panel)] border-2 border-[var(--rm-status)] text-[var(--rm-status)]`}
                    title={status.label}
                  >
                    <StatusIcon className={status.spin ? 'animate-spin' : undefined} />
                  </span>
                  {idx < visible.length - 1 && <span className="w-0.5 flex-1 bg-accent" />}
                </div>

                <div className={`min-w-0 pb-10 ${left ? 'md:order-1' : 'md:order-3'}`}>
                  <RoadmapCard item={item} />
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
