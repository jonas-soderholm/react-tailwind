/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      Heebo: ["Heebo"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), "prettier-plugin-tailwindcss"],
};
