/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-mine': '#474747',
        'purple-mine': '#8083FF',
        'gray-mine': '#E3E0F3',
        'green-mine': '#00AC7C',
        'mine-transparent': 'rgba(0, 0, 0, 0.33)',
      },
      gridTemplateColumns: {
        'mine-grid': 'repeat(auto-fill,300px)',
        'mine-button': 'repeat(auto-fill,120px)',
      },
      gridAutoRows: {
        mine: '450px',
        cart: '100px',
      },
      boxShadow: {
        'mine-shadow': '0px 0px 15px 3px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
