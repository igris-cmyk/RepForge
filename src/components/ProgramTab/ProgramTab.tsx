// src/components/ProgramTab/ProgramTab.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { DayHeader } from './DayHeader';
import { TrainerNote } from './TrainerNote';
import { InfoGrid } from './InfoGrid';
import { ExerciseTable } from './ExerciseTable';
import type { Day } from '../../types';

interface ProgramTabProps {
  day: Day;
}

export const ProgramTab = ({ day }: ProgramTabProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevDayId = useRef<number>(day.id);

  useEffect(() => {
    if (prevDayId.current === day.id) return;
    prevDayId.current = day.id;

    if (!containerRef.current) return;
    gsap.killTweensOf(containerRef.current);
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, duration: 0.22, ease: 'power2.out' }
    );

    return () => {
      if (containerRef.current) {
        gsap.killTweensOf(containerRef.current);
      }
    };
  }, [day.id]);

  return (
    <div ref={containerRef}>
      <DayHeader day={day} />
      <TrainerNote day={day} />
      <InfoGrid day={day} />
      <ExerciseTable exercises={day.exercises} dayColor={day.color} />
    </div>
  );
};
