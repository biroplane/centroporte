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
          DEFAULT: "#D74B39",
          50: "#FBECEA",
          100: "#F7DCD9",
          200: "#EFB6AE",
          300: "#E79388",
          400: "#DF7162",
          500: "#D74B39",
          600: "#B63625",
          700: "#88281B",
          800: "#591A12",
          900: "#2F0E09",
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
