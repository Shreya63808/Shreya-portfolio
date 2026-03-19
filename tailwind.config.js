/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // 👈 IMPORTANT (add this)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF66B2", // Vibrant pink
        soft: "#FFB6C1", // Soft pink
        dark: "#0b0f19", // Deep dark background
        card: "rgba(30, 41, 59, 0.7)", // Glassmorphism dark card
        accent: "#FF3399", // Saturated pink for accents
      },
    },
  },
  plugins: [],
};