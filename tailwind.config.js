/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Heebo: ["Heebo"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), "prettier-plugin-tailwindcss"],
};
