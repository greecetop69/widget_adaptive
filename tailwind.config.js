/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#E6E6E6',
        'custom-grey': '#7A899E',
        'custom-green': '#157A7A',
        'custom-dark': '#0B0C0F',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'SansPro': ['"Source Sans Pro"', 'serif'] ,// Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
}