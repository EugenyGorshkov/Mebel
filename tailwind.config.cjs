/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway','sans-serif'],
    },
    extend: {
      colors: {
        'homeColor1': '#CCB2A3'
      }
    },
  },
  plugins: [],
}
