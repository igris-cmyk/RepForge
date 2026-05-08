// src/components/RPETab/RPETab.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RPE_SCALE, PROGRESSION_RULES } from '../../data/constants';

export const RPETab = () => {
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
      {/* RPE Scale */}
      <div className="glass p-6 animate-item">
        <h2 className="font-display text-2xl tracking-wide text-white mb-6">RPE Scale (Rate of Perceived Exertion)</h2>
        <div className="space-y-3">
          {RPE_SCALE.map((item, idx) => {
            let color = '#94A3B8';
            if (item.rpe === 7) color = '#38BDF8';
            if (item.rpe === 8) color = '#22C55E';
            if (item.rpe === 9) color = '#F97316';
            if (item.rpe === 10) color = '#EF4444';

            return (
              <div key={idx} className="rpe-card-border bg-white/5 rounded-r-lg p-4" style={{ borderLeftColor: color }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 text-center shrink-0">
                    <span className="font-display text-2xl" style={{ color }}>{item.rpe}</span>
                  </div>
                  <div>
                    <h3 className="font-condensed font-bold tracking-wide text-lg text-slate-200">{item.label}</h3>
                    <p className="font-body text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progression Rules */}
      <div className="glass p-6 animate-item">
        <h2 className="font-display text-2xl tracking-wide text-white mb-6">Progression Protocol</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROGRESSION_RULES.map((rule, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="font-condensed font-bold tracking-wide text-lg text-white mb-2">{rule.title}</h3>
              <p className="font-body text-sm text-slate-400 leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
