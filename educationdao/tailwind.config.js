/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        myfont: ['FraktionSans', 'sans-serif'],
      },
      colors: {
        'dark-purple': '#2B2657',
        'darker-purple': '#121126'
      },
    },
  },
  plugins: [],
}
