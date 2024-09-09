/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,css}',  
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        pinky: '#fbe3e8',
        blueGreeny: '#5cbdb9',
        teenyGreeny: '#ebf6f5',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [],
}


