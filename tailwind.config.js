/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'afri-yellow': {
          50: '#fffdf0',
          100: '#fff9d1',
          200: '#fff3a3',
          300: '#ffea75',
          400: '#ffe147',
          500: '#ffd819', // Base color
          600: '#e6c100',
          700: '#b39500',
          800: '#806b00',
          900: '#4d4000',
        },
        'afri-orange': {
          50: '#fff4e5',
          100: '#ffe4bf',
          200: '#ffc988',
          300: '#ffad51',
          400: '#ff911a',
          500: '#ff7500', // Base color
          600: '#e65c00',
          700: '#b34700',
          800: '#803300',
          900: '#4d1f00',
        },
        'afri-red': {
          50: '#ffebeb',
          100: '#ffd1d1',
          200: '#ffa3a3',
          300: '#ff7575',
          400: '#ff4747',
          500: '#ff1919', // Base color
          600: '#e60000',
          700: '#b30000',
          800: '#800000',
          900: '#4d0000',
        },
        'afri-blue': {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#007bff', // Complementary color
          600: '#0062cc',
          700: '#004a99',
          800: '#003366',
          900: '#001a33',
        },
        'afri-green': {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50', // Complementary color
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
      },
    },
  },
  plugins: [],
}

