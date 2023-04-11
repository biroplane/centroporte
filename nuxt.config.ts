// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "netlify",
  },
  app: {
    pageTransition: {
      name: "slide-right",
      mode: "in-out",
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-icon",
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
      { code: "en", iso: "en-US", file: "en.js", flag: "it" },
      { code: "it", iso: "it-IT", file: "it.js", flag: "en" },
    ],
    defaultLocale: "it",
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
    defaultLocale: "it",
    locales: ["it", "en"],
    documentDriven: true,
  },
  css: [
    "~/assets/css/main.pcss",
    "~/assets/css/morganite.css",
    "~/assets/css/transitions.css",
  ],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
