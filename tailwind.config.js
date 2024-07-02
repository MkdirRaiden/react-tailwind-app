/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02091f",
        secondary: "#ffda99",
        tertiary: "#707070",
        bgLtDark: "#28292a",
        bgDark: "#1f1f1f",
      },
      boxShadow: {
        "3xl": "0 10px 50px 0px rgba(0, 0, 0, 0.15)",
        dark3xl: "0 10px 50px 0px rgba(250, 250, 250, 0.15)",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
