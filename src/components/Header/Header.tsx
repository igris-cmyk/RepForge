// src/components/Header/Header.tsx
import './Header.css';
import { NavTabs } from '../NavTabs/NavTabs';
import type { TabKey } from '../../types';

interface HeaderProps {
  onBack: () => void;
  tab: TabKey;
  setTab: (t: TabKey) => void;
}

const CHIPS = [
  { value: '6', label: 'DAYS' },
  { value: '2×', label: 'FREQ' },
  { value: '12', label: 'GROUPS' },
];

export const Header = ({ onBack, tab, setTab }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-[#060810]/85 backdrop-blur-[24px] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        
        {/* Left: Back Arrow & Logo */}
        <div className="flex items-center gap-4 cursor-pointer group flex-shrink-0" onClick={onBack}>
          <span className="text-[#94A3B8] group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span className="font-display text-white text-2xl tracking-wide">REPFORGE</span>
        </div>

        {/* Center: Nav Tabs (Hide on very small screens or make scrollable) */}
        <div className="hidden md:block flex-1 max-w-lg mx-auto">
          <NavTabs tab={tab} setTab={setTab} />
        </div>

        {/* Right: Stat Chips */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {CHIPS.map((chip, i) => (
            <div key={i} className="glass-sm px-3 py-1 flex items-baseline gap-1">
              <span className="font-display text-[#FF6B35] text-lg">{chip.value}</span>
            </div>
          ))}
        </div>

      </div>
      
      {/* Mobile Nav Tabs fallback */}
      <div className="md:hidden border-t border-white/5 bg-transparent overflow-x-auto scrollbar-hide py-2 px-4">
        <NavTabs tab={tab} setTab={setTab} />
      </div>
    </header>
  );
};
