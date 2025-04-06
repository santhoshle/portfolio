import { useEffect } from 'react';

type SectionMap = {
  [key: string]: React.RefObject<HTMLElement | null>;
};

export default function useSectionObserver(
  refs: SectionMap,
  setActive: (id: string) => void
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );

    Object.values(refs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs, setActive]);
}
