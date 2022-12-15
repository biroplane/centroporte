/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.{js,vue,ts,md}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        body: ["Raleway", "sans"],
        head: ["Morganite"],
      },
      height: (theme) => ({
        ...theme("spacing"),
        ...theme("maxWidth"),
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss/nesting")],
};
