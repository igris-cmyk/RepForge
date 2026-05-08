// src/components/ProgramTab/ExerciseRow.tsx
import { getRPEColor, padIndex } from '../../utils/helpers';
import type { Exercise } from '../../types';
import './ProgramTab.css';

interface ExerciseRowProps {
  exercise: Exercise;
  index: number;
  dayColor: string;
}

export const ExerciseRow = ({ exercise, index, dayColor }: ExerciseRowProps) => {
  const rpeColor = getRPEColor(exercise.rpe);

  return (
    <div
      className="glass-card exercise-row-root"
      style={{ '--day-color': dayColor } as React.CSSProperties}
    >
      <div className="exercise-row-grid">
        {/* Index */}
        <span className="exercise-row-index">{padIndex(index)}</span>

        {/* Name */}
        <span className="exercise-row-name">{exercise.name}</span>

        {/* RPE */}
        <span className="exercise-row-rpe" style={{ color: rpeColor }}>
          {exercise.rpe}
        </span>

        {/* Sets × Reps */}
        <span className="exercise-row-setsreps cell-sets" style={{ color: dayColor }}>
          {exercise.sets} × {exercise.reps}
        </span>

        {/* Rest */}
        <span className="exercise-row-rest cell-rest">{exercise.rest}</span>

        {/* Tempo */}
        <span className="exercise-row-tempo cell-tempo">{exercise.tempo}</span>

        {/* Muscle Tags */}
        <div className="exercise-row-muscles">
          {exercise.muscles.map((m) => (
            <span key={m} className="muscle-tag">{m}</span>
          ))}
        </div>
      </div>

      {/* Cue Block */}
      <div className="cue-section">
        <p className="cue-label">Cue</p>
        <p className="cue-text">{exercise.cue}</p>
      </div>
    </div>
  );
};
