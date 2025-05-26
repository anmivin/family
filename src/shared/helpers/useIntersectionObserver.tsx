import { useEffect } from 'react';

export const useIntersectionObserver = (ref: HTMLElement | null, onIntersect: () => void, threshold: number = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onIntersect();
        });
      },
      { threshold }
    );

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, onIntersect]);
};
