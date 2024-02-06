/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        insetNeomorphisme:
          "inset 2px 2px 8px #B691D2, inset -2px -3px 8px rgba(255, 255, 255, 0.5)",
      },
      animation: {
        translateYBounce: "translateYBounce 1s 1 ease-in-out",
      },
    },
  },
  plugins: [],
};
