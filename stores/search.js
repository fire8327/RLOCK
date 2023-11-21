export const useSearchStore  = defineStore('search', () => {
    const city = ref('Москва')
    const dateFrom = ref()
    const dateTo = ref()

    return {city, dateFrom, dateTo}
})