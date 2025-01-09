/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cal Sans', 'Inter var', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'orbit': 'orbit var(--orbit-speed) linear infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'float-random': 'float-random 20s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'code-rain': 'code-rain 20s linear infinite',
        'float-symbol': 'float-symbol 30s ease-in-out infinite',
        'line-draw': 'line-draw 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius))' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius))' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'float-random': {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg) scale(1)',
            opacity: 0.2
          },
          '33%': { 
            transform: 'translate(20px, -20px) rotate(3deg) scale(1.05)',
            opacity: 0.3
          },
          '66%': { 
            transform: 'translate(-15px, 15px) rotate(-2deg) scale(0.95)',
            opacity: 0.25
          }
        },
        'pulse-slow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: 0.3
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: 0.6
          }
        },
        'pulse-glow': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: 0.3
          },
          '50%': { 
            transform: 'scale(1.2) rotate(180deg)',
            opacity: 0.6
          }
        },
        'code-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'float-symbol': {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: 0.2
          },
          '25%': { 
            transform: 'translate(20px, -20px) rotate(5deg)',
            opacity: 0.3
          },
          '75%': { 
            transform: 'translate(-20px, 20px) rotate(-5deg)',
            opacity: 0.2
          }
        },
        'line-draw': {
          '0%, 100%': { 
            opacity: 0,
            strokeDashoffset: '1000'
          },
          '50%': { 
            opacity: 1,
            strokeDashoffset: '0'
          }
        }
      },
      zIndex: {
        '-10': '-10',
        '20': '20',
        '50': '50'
      }
    },
  },
  plugins: [],
};
