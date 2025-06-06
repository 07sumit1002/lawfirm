/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Original colors
        navy: {
          800: '#1E293B',
          900: '#0F172A',
        },
        gold: {
          300: '#E2C9AD',
          400: '#D5B999',
          500: '#C4A484',
          600: '#B08D6A',
          700: '#9C7852',
        },
        'royal-blue': {
          300: '#a1c4fd',
          400: '#7193ff',
          500: '#4169E1',
          600: '#3956b1',
          700: '#2e468b',
          800: '#24366a',
          900: '#1b2850',
        },
        deepRoyal: '#003C8C',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
