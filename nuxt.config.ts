// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },  
  runtimeConfig: {
    public: {
      APIbaseURL: process.env.BACKEND_URL
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@formkit/nuxt",
    "nuxt-icon"
  ],
  googleFonts: {
    families: {
        'Raleway': {
          wght: [300, 400, 500]
        }
    }
  },
  postcss: {
    plugins: {
      cssnano: false 
    }
  },
  pinia: {
    autoImports: [
      'defineStore'
    ]
  },
  plugins: [
    { src: '~/plugins/maps', mode: 'client' },
  ]
})