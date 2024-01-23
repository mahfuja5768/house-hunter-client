/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        primary: "#cda840",
        secondary: "#607274",
      },
    },
  },
  plugins: [require("daisyui")],
};
