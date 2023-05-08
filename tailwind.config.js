/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8d5c3f",
        lighter: "#c17d56",
        darker: "#4f3323",
        secondary: "#e8c7bd",
        neutral: "#efe5d8",
        accent: "#dfc0a2",
      },
      fontFamily: {
        display: ["Belleza", "sans-serif"],
        primary: ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
};
