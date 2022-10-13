const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        angelBaby: {
          "100": "#E8F0FF",
          "200": "#989CCE",
          "300": "#272B64"
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
