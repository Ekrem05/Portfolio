const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      base: "var(--base)",
      secondary: "var(--secondary)",
      mutedGray: "var(--mutedGray)",
      navBg: "var(--navBg)",
      secondaryText: "var(--secondaryText)",
      primaryText: "var(--primaryText)",
      active: "var(--active)",

      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
