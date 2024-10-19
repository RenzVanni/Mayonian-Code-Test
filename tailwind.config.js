/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "rgba(255, 255, 255, .1)",
        border: "rgba(136, 136, 136, 1)",
        customBlue: "rgba(0, 166, 255, 1)",
        provider: "rgba(242, 242, 250, 1)",
        sub: "rgba(136, 136, 136, 0.2)",
        sub2: "rgba(136, 136, 136, 0.1)",
      },
    },
  },
  plugins: [],
};
