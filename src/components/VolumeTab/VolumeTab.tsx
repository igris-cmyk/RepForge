// src/components/VolumeTab/VolumeTab.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import VOLUME_DATA from '../../data/volume';
import { WEEK_SCHEDULE } from '../../data/constants';

export const VolumeTab = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.animate-item');
    gsap.fromTo(
      items,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Schedule Summary */}
      <div className="glass p-6 animate-item">
        <h2 className="font-display text-2xl tracking-wide text-white mb-4">Training Split</h2>
        <div className="flex flex-wrap gap-3">
          {WEEK_SCHEDULE.map((day, idx) => (
            <div key={idx} className="schedule-chip">
              <span className="font-condensed text-xs text-slate-400 font-bold tracking-widest">{day.day}</span>
              <span className="font-condensed text-base font-bold tracking-wider" style={{ color: day.color }}>{day.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Volume Targets */}
      <div className="glass p-6 animate-item">
        <h2 className="font-display text-2xl tracking-wide text-white mb-6">Weekly Volume Targets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {VOLUME_DATA.map((item, idx) => {
            const [min, max] = item.target;
            const percentage = Math.min(100, (item.sets / max) * 100);
            
            let statusColor = '#38BDF8'; // Default Sky
            if (item.sets < min) statusColor = '#FBBF24'; // Amber (Under)
            if (item.sets > max) statusColor = '#EF4444'; // Red (Over)
            if (item.sets >= min && item.sets <= max) statusColor = '#22C55E'; // Green (Optimal)
            
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-condensed font-bold tracking-wide text-lg text-slate-200">{item.muscle}</span>
                  <div className="text-right">
                    <span className="font-condensed font-bold text-xl" style={{ color: statusColor }}>{item.sets}</span>
                    <span className="font-mono text-xs text-slate-500 ml-1">/ {min}-{max} sets</span>
                  </div>
                </div>
                <div className="bar-track">
                  <div className="bar-fill transition-all duration-1000 ease-out" style={{ width: `${percentage}%`, backgroundColor: statusColor }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
