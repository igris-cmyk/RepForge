// src/components/ProgramTab/InfoGrid.tsx
import type { Day } from '../../types';
import './ProgramTab.css';

interface InfoGridProps {
  day: Day;
}

export const InfoGrid = ({ day }: InfoGridProps) => {
  return (
    <div className="info-grid-root">
      <div className="glass-card info-card">
        <p className="info-card-label">Warm-Up Protocol</p>
        <p className="info-card-text">{day.warmup}</p>
      </div>
      <div className="glass-card info-card">
        <p className="info-card-label">Nutrition Timing</p>
        <p className="info-card-text">{day.nutrition}</p>
      </div>
    </div>
  );
};
