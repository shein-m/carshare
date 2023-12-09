/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "420px",
      md: "768px",
      xl: "1220px",
      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1219.98px" },
      notXl: { max: "1219.98px" },
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2rem",
          xl: "1rem",
        },
      },
    },
  },
  plugins: [],
};
