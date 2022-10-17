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
      backgroundImage:{
        'hero-pattern': "linear-gradient(to right bottom,rgba(58, 65, 158, 0.6), rgba(39, 43, 100, 0.6)), url('src/assets/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpg')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
