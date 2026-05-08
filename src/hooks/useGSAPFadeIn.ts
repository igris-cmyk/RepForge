// src/hooks/useGSAPFadeIn.ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGSAPFadeIn = (dependency?: unknown) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.killTweensOf(ref.current);
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );

    return () => {
      if (ref.current) {
        gsap.killTweensOf(ref.current);
      }
    };
  }, [dependency]);

  return ref;
};
