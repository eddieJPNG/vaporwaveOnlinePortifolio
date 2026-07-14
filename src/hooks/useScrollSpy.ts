import { useState, useEffect, useMemo } from 'react';

export const useScrollSpy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>('');
  const idsKey = useMemo(() => JSON.stringify(ids), [ids]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [idsKey, offset]);

  return activeId;
};
