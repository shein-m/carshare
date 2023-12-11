import twElements from "tw-elements/dist/plugin.cjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
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

      // fontFamily: {
      //   manrope: ["Manrope", "sans-serif"],
      // },

      colors: {
        blue: "#3470FF",
        blueActive: "#0B44CD",
        white: "#ffffff",

        text: "#121417",
        textOpacity: "rgba(18, 20, 23, 0.50",
      },

      fontSize: {
        sm: "12px",
        base: "14px",
        xl: "16px",
        "2xl": "18px",
      },

      backgroundImage: {
        "main-bg": "url('/bgpng.png')",
      },
    },
  },
  plugins: [twElements],
};
