/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'kodchasan': '"Kodchasan", sans-serif;',
      },
      colors: {
        'accent': '#4ade80',
      },
    },
  },
  plugins: [],
};
