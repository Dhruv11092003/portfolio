/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(129,140,248,.25), 0 10px 35px rgba(76,29,149,.35)',
      },
      colors: {
        ai: {
          neon: '#7C3AED',
          blue: '#2563EB',
          dark: '#05070D',
        },
      },
    },
  },
  plugins: [],
};
