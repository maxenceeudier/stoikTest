/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        insetNeomorphisme:
          "inset 2px 2px 8px #bababa, inset -2px -3px 8px #ffffff",
      },
      animation: {
        translateYBounce: "translateYBounce 1s 1 ease-in-out",
      },
      fontFamily: {
        exo: ["Exo 2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
