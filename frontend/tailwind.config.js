/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        22: '5.5rem',
        68: '17rem',
        128: '32rem',
        144: '36rem',
      },
    },
    colors: {
      grey: '#535353',
      white: '#ffffff',
      'light-grey': '#E7E7E7',
      'light-blue': '#C6DFDF',
      brown: '#4E3131',
      black: '#000000',
      yellow: '#F2DF79',
    },
  },
  plugins: [],
};
