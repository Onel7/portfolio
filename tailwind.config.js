/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#ffffff',
        cyan: { 200: '#91ffe0', 300: '#4dffcc', 400: '#00ffb4', 500: '#00d99a' },
      },
      boxShadow: { glow: '0 0 50px rgba(0, 255, 180, 0.16)' },
      animation: { float: 'float 6s ease-in-out infinite' },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
}
