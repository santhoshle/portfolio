import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const spotlight = useRef<HTMLDivElement>(null);

  // Updates CSS vars directly so mouse moves don't re-render React
  useEffect(() => {
    const move = (e: MouseEvent) => {
      spotlight.current?.style.setProperty('--x', `${e.clientX}px`);
      spotlight.current?.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={spotlight}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(600px at var(--x, 0px) var(--y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)',
        zIndex: 30
      }}
    />
  );
}
