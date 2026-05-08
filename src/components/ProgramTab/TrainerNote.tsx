// src/components/ProgramTab/TrainerNote.tsx
import type { Day } from '../../types';
import './ProgramTab.css';

interface TrainerNoteProps {
  day: Day;
}

export const TrainerNote = ({ day }: TrainerNoteProps) => {
  return (
    <div
      className="glass-card trainer-note-root"
      style={{ borderLeftColor: day.color }}
    >
      <p className="trainer-note-label" style={{ color: day.color }}>
        Trainer's Note
      </p>
      <p className="trainer-note-text">{day.trainerNote}</p>
    </div>
  );
};
