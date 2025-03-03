/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollRow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRowReverse: {
          "0%": { transform: "translateX(-100)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        "scroll-row": "scrollRow 20s linear infinite",
        "scroll-row-reverse": "scrollRowReverse 20s linear infinite",
      },
    },
  },
  plugins: [],
};
