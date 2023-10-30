/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{hbs,js}"],
  theme: {
    extend: {
      colors: {
        MyYellow: "#FFCC00",
        MyGray: "#222222",
        MyPaleGray: "#D2D2D2",
        MyBlack: "#101010"
      },
    },
  },
  plugins: [],
}

