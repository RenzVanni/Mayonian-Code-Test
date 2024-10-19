/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "rgba(255, 255, 255, .1)",
        border: "rgba(136, 136, 136, 1)",
      },
    },
  },
  plugins: [],
};
