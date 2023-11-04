// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  googleFonts: {
    families: {
        'Raleway': {
          wght: [300, 400, 500]
        }
    }
},
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts"
  ],
  pinia: {
    autoImports: [
      'defineStore'
    ]
  }
})