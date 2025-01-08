/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xs: "0.6rem"
      },
      colors:{
        "blue":{
          700: "#002A5D",
          100: "#7F95AC",
          300: "#16416B",
          200: "#3B5C81",
          50: "#E5E9EF",
          500: "#3B5C81"

        },
        "white":{
          300: "#EFF2F6",
          100: "#A6B8C8",
          200: "#F5F7F7",
          400: "#FEFEFE",
          500: "#FEFEFE"
        },
        "green": {
          300: "#3FDFD0"
        },
        "black": {
          500: "#000049",
          300: "#3FDFCE"
        }
        
      }
    },
  },
  plugins: [],
}