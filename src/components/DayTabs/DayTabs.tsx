// src/components/DayTabs/DayTabs.tsx
import type { Day } from '../../types';
import './DayTabs.css';

interface DayTabsProps {
  days: Day[];
  activeDay: number;
  setActiveDay: (id: number) => void;
}

export const DayTabs = ({ days, activeDay, setActiveDay }: DayTabsProps) => {
  return (
    <div className="day-tabs-root">
      <div className="day-tabs-scroll" role="tablist" aria-label="Training days">
        {days.map((day) => {
          const isActive = activeDay === day.id;
          return (
            <button
              key={day.id}
              id={`day-tab-${day.id}`}
              className={`day-tab-btn${isActive ? ' is-active' : ''}`}
              onClick={() => setActiveDay(day.id)}
              role="tab"
              aria-selected={isActive}
              style={
                isActive
                  ? {
                      '--day-color': day.color,
                      borderColor: day.color,
                      boxShadow: `0 0 0 1px ${day.color}, 0 0 24px -4px color-mix(in srgb, ${day.color} 40%, transparent)`,
                    } as React.CSSProperties
                  : {}
              }
            >
              <span
                className="day-tab-num"
                style={{ color: isActive ? '#94A3B8' : '#64748B' }}
              >
                DAY {day.dayNum}
              </span>
              <span
                className="day-tab-label"
                style={{ color: isActive ? day.color : '#64748B' }}
              >
                {day.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
