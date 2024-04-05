/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      fontFamily: {
        "Montserrat": "Montserrat, sans-serif",
        "Outfit": "Outfit, sans-serif",
        "Exo": "Exo\\ 2, sans-serif",
      },
    },
  },
  plugins: [],
};
