// src/components/LandingPage/LandingPage.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LandingPage.css';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set([eyebrowRef.current, subheadRef.current, ctaRef.current], { opacity: 0, y: 20 });
      gsap.set(statsRef.current?.children || [], { opacity: 0, scale: 0.9 });
      
      const headlineChars = headlineRef.current?.querySelectorAll('.char') || [];
      gsap.set(headlineChars, { opacity: 0, y: 60 });

      // t=0.0s eyebrow text
      gsap.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0 });
      
      // t=0.4s headline chars
      gsap.to(headlineChars, { opacity: 1, y: 0, duration: 0.8, stagger: 0.04, ease: 'power3.out', delay: 0.4 });
      
      // t=1.2s sub-headline
      gsap.to(subheadRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 1.2 });
      
      // t=1.6s stats chips
      gsap.to(statsRef.current?.children || [], { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)', delay: 1.6 });
      
      // t=2.0s CTA button
      gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 2.0 });

      // Ticker infinite loop
      if (tickerRef.current) {
        const tickerContent = tickerRef.current.firstElementChild as HTMLElement;
        const w = tickerContent.offsetWidth;
        gsap.to(tickerRef.current, {
          x: -w,
          duration: 20,
          ease: 'none',
          repeat: -1
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    // GSAP exit animation
    const tl = gsap.timeline({
      onComplete: onEnter
    });
    tl.to('.landing-content', { opacity: 0, y: -40, duration: 0.4, ease: 'power2.in' })
      .to('.landing-page', { opacity: 0, duration: 0.3 });
  };

  const text1 = "BUILT TO";
  const text2 = "MAKE YOU";
  const text3 = "BIGGER.";

  return (
    <div ref={containerRef} className="landing-page min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#FF6B35] rounded-full blur-[120px] opacity-[0.08] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="landing-content relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 py-20 flex-1 flex flex-col justify-center items-start">
        
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="font-condensed font-bold tracking-[0.2em] text-[#94A3B8] text-sm uppercase mb-6">
          COACH'S EDITION · HYPERTROPHY PROTOCOL
        </div>

        {/* Headline */}
        <h1 ref={headlineRef} className="font-display leading-[0.85] text-white tracking-wide uppercase mb-8" style={{ fontSize: 'clamp(64px, 12vw, 140px)' }}>
          <div className="overflow-hidden pb-2">
            {text1.split('').map((char, i) => <span key={`t1-${i}`} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>)}
          </div>
          <div className="overflow-hidden pb-2">
            {text2.split('').map((char, i) => <span key={`t2-${i}`} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>)}
          </div>
          <div className="overflow-hidden pb-2 text-[#FF6B35]">
            {text3.split('').map((char, i) => <span key={`t3-${i}`} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>)}
          </div>
        </h1>

        {/* Subhead */}
        <p ref={subheadRef} className="font-body text-[#94A3B8] text-lg max-w-[560px] leading-relaxed mb-12">
          A 6-day Push Pull Legs split engineered for maximum hypertrophy. Double frequency. Progressive overload. No wasted sessions.
        </p>

        {/* Stats Row */}
        <div ref={statsRef} className="flex flex-wrap gap-4 mb-16">
          <div className="glass-sm px-6 py-3 border-t-2 border-t-[#FF6B35]">
            <span className="font-condensed font-bold tracking-wider text-[#F1F5F9] text-base">6 DAYS PER WEEK</span>
          </div>
          <div className="glass-sm px-6 py-3 border-t-2 border-t-[#FF6B35]">
            <span className="font-condensed font-bold tracking-wider text-[#F1F5F9] text-base">2× MUSCLE FREQUENCY</span>
          </div>
          <div className="glass-sm px-6 py-3 border-t-2 border-t-[#FF6B35]">
            <span className="font-condensed font-bold tracking-wider text-[#F1F5F9] text-base">12 MUSCLE GROUPS</span>
          </div>
        </div>

        {/* CTA */}
        <button 
          ref={ctaRef}
          onClick={handleCtaClick}
          className="glass group relative overflow-hidden px-10 py-5 border-[#FF6B35]/50 hover:border-[#FF6B35] transition-colors duration-300"
        >
          <div className="absolute inset-0 bg-[#FF6B35]/10 group-hover:bg-[#FF6B35]/20 transition-colors duration-300"></div>
          <span className="relative z-10 font-condensed font-bold tracking-widest text-[#F1F5F9] text-xl flex items-center gap-3">
            VIEW YOUR PROGRAM 
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>

      </div>

      {/* Ticker & Footer Container */}
      <div className="relative z-10 w-full mt-auto">
        {/* Ticker */}
        <div className="w-full overflow-hidden bg-[#060810]/50 backdrop-blur-md border-t border-white/5 py-3">
          <div ref={tickerRef} className="flex whitespace-nowrap">
            <div className="flex shrink-0 pr-8">
              <span className="font-condensed font-bold uppercase tracking-[0.2em] text-[#1E293B] text-2xl">
                PUSH · PULL · LEGS · PROGRESSIVE OVERLOAD · HYPERTROPHY · STRENGTH · CONSISTENCY · PUSH · PULL · LEGS · PROGRESSIVE OVERLOAD · HYPERTROPHY · STRENGTH · CONSISTENCY · 
              </span>
            </div>
            <div className="flex shrink-0 pr-8">
              <span className="font-condensed font-bold uppercase tracking-[0.2em] text-[#1E293B] text-2xl">
                PUSH · PULL · LEGS · PROGRESSIVE OVERLOAD · HYPERTROPHY · STRENGTH · CONSISTENCY · PUSH · PULL · LEGS · PROGRESSIVE OVERLOAD · HYPERTROPHY · STRENGTH · CONSISTENCY · 
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-4 text-[#64748B] font-body text-xs border-t border-white/5 bg-[#060810]/90">
          <span>Developer: Sahil Khursheed</span>
          <a href="mailto:igris4056@gmail.com" className="hover:text-[#FF6B35] transition-colors mt-2 sm:mt-0">igris4056@gmail.com</a>
        </footer>
      </div>
    </div>
  );
};
