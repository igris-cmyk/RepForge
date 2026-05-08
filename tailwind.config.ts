// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#060810',
        'glass-bg': 'rgba(255, 255, 255, 0.04)',
        'glass-hover': 'rgba(255, 255, 255, 0.07)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-border-hover': 'rgba(255, 255, 255, 0.16)',
        'text-primary': '#F1F5F9',
        'text-secondary': '#CBD5E1',
        'text-muted': '#94A3B8',
        'text-dimmed': '#64748B',
        'accent-push-a': '#FF6B35',
        'accent-pull-a': '#22C55E',
        'accent-legs-a': '#EAB308',
        'accent-push-b': '#F472B6',
        'accent-pull-b': '#06B6D4',
        'accent-legs-b': '#FB923C',
      },
      maxWidth: {
        '5xl': '64rem',
      },
      backdropBlur: {
        '24px': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
