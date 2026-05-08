// src/components/NavTabs/NavTabs.tsx
import type { TabKey } from '../../types';
import { NAV_TABS } from '../../data/constants';
import './NavTabs.css';

interface NavTabsProps {
  tab: TabKey;
  setTab: (tab: TabKey) => void;
}

export const NavTabs = ({ tab, setTab }: NavTabsProps) => {
  return (
    <nav className="nav-tabs-root" aria-label="Main navigation">
      <div className="nav-tabs-inner">
        {NAV_TABS.map((t) => (
          <button
            key={t.key}
            id={`nav-tab-${t.key}`}
            className={`nav-tab-button${tab === t.key ? ' is-active' : ''}`}
            onClick={() => setTab(t.key)}
            aria-selected={tab === t.key}
            role="tab"
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
