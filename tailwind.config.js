/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        primary: {
          main: '#d98427',
          hover: '#f39c12',
          light: 'rgb(255, 247, 237)',
        }
      },
      spacing: {
        section: '4rem',
        container: '1rem'
      }
    }
  },
  plugins: [],
}
