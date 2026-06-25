import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#070912',
          800: '#0c1020',
          700: '#11162a',
        },
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          400: '#5aa9ff',
          500: '#2f86ff',
          600: '#1f6bdb',
          700: '#1955b0',
        },
        accent: {
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d28d9',
        },
        neon: {
          pink: '#ff4ecb',
          cyan: '#22d3ee',
          violet: '#8b5cf6',
        },
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(124,58,237,0.15), transparent 60%), radial-gradient(ellipse at bottom, rgba(34,211,238,0.15), transparent 60%)',
        'hero-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.35), transparent 70%), radial-gradient(40% 40% at 80% 20%, rgba(34,211,238,0.25), transparent 70%), radial-gradient(40% 40% at 20% 80%, rgba(255,78,203,0.2), transparent 70%)',
        'card-glow':
          'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(34,211,238,0.18))',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px -10px rgba(124,58,237,0.45)',
        ring: '0 0 0 1px rgba(255,255,255,0.08)',
        soft: '0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,30px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        gradient: 'gradient 8s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
