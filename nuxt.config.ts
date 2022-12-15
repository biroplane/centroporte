// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "netlify",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/i18n",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.js" },
      { code: "it", iso: "it-IT", file: "it.js" },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        it: {
          welcome: "Benvenuti",
        },
      },
    },
  },
  content: {
    documentDriven: true,
  },
  css: ["~/assets/css/main.css", "~/assets/css/morganite.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
