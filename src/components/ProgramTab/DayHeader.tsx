// src/components/ProgramTab/DayHeader.tsx
import { getTotalSets } from '../../utils/helpers';
import type { Day } from '../../types';
import './ProgramTab.css';

interface DayHeaderProps {
  day: Day;
}

export const DayHeader = ({ day }: DayHeaderProps) => {
  const totalSets = getTotalSets(day.exercises);
  const exerciseCount = day.exercises.length;

  return (
    <div
      className="day-header-root"
      style={{ '--day-color': day.color } as React.CSSProperties}
    >
      <div className="day-header-top">
        <span
          className="day-tag-badge"
          style={{
            backgroundColor: `color-mix(in srgb, ${day.color} 15%, transparent)`,
            borderColor: `color-mix(in srgb, ${day.color} 40%, transparent)`,
            color: day.color,
          }}
        >
          {day.tag}
        </span>
      </div>
      <h2 className="day-header-title" style={{ color: day.color }}>
        {day.label}
      </h2>
      <p className="day-header-focus">{day.focus}</p>
      <div className="day-header-stats">
        {[
          { value: String(exerciseCount), label: 'EXERCISES' },
          { value: String(totalSets), label: 'TOTAL SETS' },
          { value: '75–95', label: 'MIN' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card day-stat-box">
            <span className="day-stat-value">{stat.value}</span>
            <span className="day-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
