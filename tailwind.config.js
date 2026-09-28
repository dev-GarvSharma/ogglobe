/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#142b37", accent: "#c65d3b", sand: "#f6f7f5" },
      fontFamily: { sans: ["Inter", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
