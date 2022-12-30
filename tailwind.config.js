/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        specialelite: ["Special Elite", "cursive"],
        berkshireswash: ["Berkshire Swash", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        sourceserifpro: ["Source Serif Pro", "serif"],
        freehand: ["Freehand", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        architectsdaughter: ["Architects Daughter", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
}
