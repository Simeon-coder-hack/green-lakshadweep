/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#061B2B',
          midnight: '#081522',
          card: 'rgba(8, 21, 34, 0.75)',
          surface: '#0d2235',
          border: 'rgba(33, 212, 196, 0.15)',
        },
        turquoise: {
          DEFAULT: '#21D4C4',
          glow: '#21D4C4',
          light: '#61e8db',
          dark: '#139e91',
        },
        seagreen: {
          DEFAULT: '#36BFA6',
          light: '#5ad9c1',
          dark: '#248f7b',
        },
        softgrey: '#F2F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      animation: {
        'wave-pulse': 'wavePulse 6s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        wavePulse: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(33, 212, 196, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(33, 212, 196, 0.8))' },
        },
      },
    },
  },
  plugins: [],
}
