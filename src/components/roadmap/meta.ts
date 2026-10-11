// Normalises the free-form fields in roadmap.json into known keys.
import type { IconType } from 'react-icons';
import { FaCalendarAlt, FaCheck, FaCog, FaShieldAlt, FaSun } from 'react-icons/fa';
import { RoadmapItem } from '../../types';

export type StatusKey = 'completed' | 'inprogress' | 'planned';
export type PersonaKey = 'santhosh' | 'solaras';

export const STATUSES: Record<StatusKey, { label: string; icon: IconType; spin?: boolean }> = {
  completed: { label: 'Completed', icon: FaCheck },
  inprogress: { label: 'In Progress', icon: FaCog, spin: true },
  planned: { label: 'Planned', icon: FaCalendarAlt },
};

// Each persona's look comes from its own site (see .palette-* in globals.css):
// santhosh -> santhoshle.dev (Nord), solaras -> solaraslight.com (slate / cyan / purple)
export const PERSONAS: Record<PersonaKey, { label: string; tagline: string; icon: IconType; site: string }> = {
  santhosh: {
    label: 'Santhosh Laguduwa',
    tagline: 'IAM Integration Specialist · Software Engineer',
    icon: FaShieldAlt,
    site: 'https://www.santhoshle.dev/',
  },
  solaras: {
    label: 'Solaras Light',
    tagline: 'Solo Game Developer · World Building',
    icon: FaSun,
    site: 'https://www.solaraslight.com/',
  },
};

export interface RoadmapEntry extends RoadmapItem {
  statusKey: StatusKey;
  personaKey: PersonaKey;
}

export function statusKey(status = ''): StatusKey {
  const s = status.toLowerCase().replace(/[\s_-]/g, '');
  if (s.startsWith('complete') || s === 'done') return 'completed';
  if (s.startsWith('inprogress') || s === 'wip' || s === 'active') return 'inprogress';
  return 'planned';
}

// "Solaras Light" -> solaras; "Santhosh Kumar L.E.", "santhoshle", "Santhosh Laguduwa" -> santhosh
export function personaKey(author = ''): PersonaKey {
  return author.toLowerCase().includes('solaras') ? 'solaras' : 'santhosh';
}

// "2025", 2025 or "2025-2026" -> 2025; entries without a year go last.
function yearValue(year?: number | string) {
  const n = parseInt(String(year), 10);
  return Number.isNaN(n) ? Infinity : n;
}

const STATUS_ORDER: StatusKey[] = ['completed', 'inprogress', 'planned'];

// Year (oldest first, missing last), then status, then roadmap.json order (Array.sort is stable).
export function toEntries(items: RoadmapItem[]): RoadmapEntry[] {
  return items
    .map((item) => ({ ...item, statusKey: statusKey(item.status), personaKey: personaKey(item.author) }))
    .sort(
      (a, b) =>
        yearValue(a.year) - yearValue(b.year) ||
        STATUS_ORDER.indexOf(a.statusKey) - STATUS_ORDER.indexOf(b.statusKey)
    );
}
