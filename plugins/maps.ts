import { defineNuxtPlugin } from '#app'
import plugin from 'vue-yandex-maps'
const settings = {
    apiKey: '4e803354-091b-4dd5-b5db-6803d17853b2', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1' // Версия Я.Карт
  }
  export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, settings)
  });