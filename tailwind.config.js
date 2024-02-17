/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "angry-comps": "url('/ac_edit2.png')",
      },
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
