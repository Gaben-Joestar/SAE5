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
    letterSpacing: {
      verywide: '.2em',
    },
    colors: {
      grey: '#535353',
      white: '#ffffff',
      'white-grey': '#F7F7F7',
      'light-grey': '#E7E7E7',
      'light-blue': '#C6DFDF',
      D6D6D6: '#D6D6D6',
      brown: '#4E3131',
      black: '#000000',
      yellow: '#F2DF79',
      red: '#DD5353',
      cyan: '#D3D3D3',
      'grey-brown': '#EFD6FF',
      green: '#598E5E',
      purple: '#976498',
    },
  },
  plugins: [],
};
