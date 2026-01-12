/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: "#efefec",
        charcoal: "#2b2b2b",
        wood: "#6b5f52",
      },
      fontFamily: {
        serif: ["'Shippori Mincho B1'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wideArchitect: "0.16em",
        wideLabel: "0.22em",
      },
    },
  },
  plugins: [],
};
