
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        obsidian: '#0a0a0f',
        'glass-white': 'rgba(255,255,255,0.04)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-slower': 'float 28s ease-in-out infinite reverse',
        'float-slowest': 'float 35s ease-in-out infinite 5s',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.97)' },
          '75%': { transform: 'translate(40px, 30px) scale(1.03)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 24px 64px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glow-purple': '0 0 40px rgba(124, 58, 237, 0.25)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.2)',
        'glow-sm': '0 0 20px rgba(124, 58, 237, 0.15)',
      },
    },
  },
  plugins: [],
}
