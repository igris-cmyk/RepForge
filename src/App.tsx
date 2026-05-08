// src/App.tsx
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTab } from './hooks/useTab';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Header } from './components/Header/Header';
import { DayTabs } from './components/DayTabs/DayTabs';
import { ProgramTab } from './components/ProgramTab/ProgramTab';
import { VolumeTab } from './components/VolumeTab/VolumeTab';
import { RPETab } from './components/RPETab/RPETab';
import DAYS from './data/days';
import type { TabKey } from './types';

export default function App() {
  const [screen, setScreen] = useState<'landing' | 'dashboard'>('landing');
  
  const { tab, setTab } = useTab('program');
  const [activeDay, setActiveDay] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef<TabKey>(tab);

  // Tab switch animation
  useEffect(() => {
    if (screen !== 'dashboard') return;
    if (prevTabRef.current === tab) return;
    prevTabRef.current = tab;

    if (!contentRef.current) return;
    gsap.killTweensOf(contentRef.current);
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
    );
  }, [tab, screen]);

  // Screen mount animations
  useEffect(() => {
    if (screen === 'dashboard') {
      gsap.fromTo('.dashboard', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    }
  }, [screen]);

  const handleEnterDashboard = () => {
    setScreen('dashboard');
  };

  const handleBackToLanding = () => {
    // Reverse transition
    gsap.to('.dashboard', { 
      opacity: 0, 
      y: 30, 
      duration: 0.4, 
      ease: 'power2.in',
      onComplete: () => setScreen('landing')
    });
  };

  return (
    <div className="w-full min-h-screen">
      {screen === 'landing' ? (
        <LandingPage onEnter={handleEnterDashboard} />
      ) : (
        <div className="dashboard min-h-screen flex flex-col" ref={dashboardRef}>
          <Header onBack={handleBackToLanding} tab={tab} setTab={setTab} />
          
          {tab === 'program' && (
            <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full pt-6">
              <DayTabs days={DAYS} activeDay={activeDay} setActiveDay={setActiveDay} />
            </div>
          )}
          
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 pt-6 pb-16">
            <div ref={contentRef}>
              {tab === 'program' && (
                <ProgramTab day={DAYS[activeDay]} />
              )}
              {tab === 'volume' && <VolumeTab />}
              {tab === 'rpe' && <RPETab />}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
