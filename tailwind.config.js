/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E081C",
        primaryLight: "#180E30",
        navLink: "#919191",
      },
      fontFamily: {
        Mori: ["Mori Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
