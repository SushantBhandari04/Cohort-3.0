/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":{
          700: "#002A5D",
          100: "#7F95AC",
          300: "#16416B",
          200: "#3B5C81",

        },
        "white":{
          300: "#EFF2F6",
          100: "#A6B8C8"
        },
        "green": {
          300: "#3FDFD0"
        },
        "black": {
          500: "#000049"
        }
        
      }
    },
  },
  plugins: [],
}