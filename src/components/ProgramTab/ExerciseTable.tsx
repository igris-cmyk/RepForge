// src/components/ProgramTab/ExerciseTable.tsx
import { ExerciseRow } from './ExerciseRow';
import type { Exercise } from '../../types';
import './ProgramTab.css';

interface ExerciseTableProps {
  exercises: Exercise[];
  dayColor: string;
}

const TEMPO_KEYS = [
  { code: 'E', desc: 'Eccentric (down)' },
  { code: 'P', desc: 'Pause at bottom' },
  { code: 'C', desc: 'Concentric (up)' },
  { code: 'T', desc: 'Top pause' },
  { code: 'X', desc: 'Explosive' },
];

export const ExerciseTable = ({ exercises, dayColor }: ExerciseTableProps) => {
  return (
    <div className="exercise-table-root">
      {/* Column Headers */}
      <div className="exercise-col-header">
        <span className="col-header-label">#</span>
        <span className="col-header-label">Exercise</span>
        <span className="col-header-label" style={{ textAlign: 'center' }}>RPE</span>
        <span className="col-header-label col-sets" style={{ textAlign: 'center' }}>Sets × Reps</span>
        <span className="col-header-label col-rest" style={{ textAlign: 'center' }}>Rest</span>
        <span className="col-header-label col-tempo" style={{ textAlign: 'center' }}>Tempo</span>
        <span className="col-header-label" style={{ textAlign: 'right' }}>Target</span>
      </div>

      {/* Exercise Rows */}
      {exercises.map((exercise, i) => (
        <ExerciseRow
          key={exercise.name}
          exercise={exercise}
          index={i}
          dayColor={dayColor}
        />
      ))}

      {/* Tempo Key Footer */}
      <div className="glass-card tempo-key-root">
        <span className="tempo-key-title">Tempo Key</span>
        {TEMPO_KEYS.map((tk) => (
          <div key={tk.code} className="tempo-key-item">
            <span className="tempo-key-code">{tk.code}</span>
            <span className="tempo-key-desc">= {tk.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
