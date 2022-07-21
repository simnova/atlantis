/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    
    extend: {

      colors: {
        'great-blue': {
          DEFAULT: '#2A669F',
          '50': '#E4F7F8',
          '100': '#CCEEF2',
          '200': '#9CD7E5',
          '300': '#6CB9D8',
          '400': '#3B94CB',
          '500': '#2A669F',
          '600': '#234B83',
          '700': '#1B3366',
          '800': '#14204A',
          '900': '#0C102E'
        },
        'spicy-mix': {
          DEFAULT: '#886C41',
          '50': '#F3F4E8',
          '100': '#E9EAD4',
          '200': '#D6D4AA',
          '300': '#C2B781',
          '400': '#AE9658',
          '500': '#886C41',
          '600': '#705236',
          '700': '#573B2A',
          '800': '#3F271F',
          '900': '#271613'
        },
      }
    },
  },
  plugins: [],
}
