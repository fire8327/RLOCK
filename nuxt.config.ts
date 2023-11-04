// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },  
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
        'Raleway': {
          wght: [300, 400, 500]
        }
    }
  },
  pinia: {
    autoImports: [
      'defineStore'
    ]
  }
})