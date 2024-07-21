/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add custom scrollbar utilities
      scrollbar: ['rounded'],
      letterSpacing:{
        'extra-widest': '0.5rem'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none' /* Firefox */
        },
      });
    }
  ],
}