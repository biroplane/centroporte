/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.md",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100vw", // add required value here
          },
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          DEFAULT: "#b0e1ff",
          50: "#ebf7ff",
          100: "#e3f4ff",
          200: "#d6efff",
          300: "#caebff",
          400: "#bde6ff",
          500: "#b0e1ff",
          600: "#8db4cd",
          700: "#6b889b",
          800: "#485c68",
          900: "#252f36",
        },
      },
      fontFamily: {
        body: ["Raleway", "sans"],
        head: ["Morganite"],
      },
      height: (theme) => ({
        ...theme("spacing"),
        ...theme("maxWidth"),
        content: `calc(100vh - ${theme("spacing.16")})`,
      }),
      gridTemplateRows: ({ theme }) => ({
        sky: `${theme("spacing.16")} auto`,
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss/nesting")],
};
