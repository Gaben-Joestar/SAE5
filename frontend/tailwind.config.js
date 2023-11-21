/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
    },
    colors: {
      grey: '#535353',
      white: '#ffffff',
      'light-grey': '#E7E7E7',
      'light-blue': '#C6DFDF',
      brown: '#4E3131',
      black: '#000000',
    },
  },
  plugins: [],
};
