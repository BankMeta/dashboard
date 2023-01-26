/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'nova-flat': '"Nova Flat"'
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
