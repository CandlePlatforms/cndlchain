const colors = require('tailwindcss/colors')
console.log(colors)

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      ...colors,
      'blue': {
        ...colors.blue,
        '800': '#21429B'
      },
      slate: {
        200: '#ECEFFE'
      }
    },
    extend: {
    }
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
