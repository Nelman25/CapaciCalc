/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softBlue: {
          100: "#F8FAFC",
          200: "#D9EAFD",
          300: "#BCCCDC",
          400: "#9AA6B2",
        },
        skyBolt: "#0D99FF",
      },
    },
  },
  plugins: [],
};
