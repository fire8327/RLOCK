<template>
    <div class="my-10 flex flex-col gap-5 w-full">
        <!-- <pre>{{ apartments }}</pre> -->
        <!-- <div class="w-full py-6 xl:py-8 px-6 md:px-12 xl:px-[90px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[25px] flex items-center gap-8 md:gap-12 xl:gap-48">
            <p class="NeutralFace text-2xl md:text-3xl xl:text-[32px] leading-[151.8%] uppercase text-white">отели в москве</p>
            <div class="flex items-center gap-5">
                <div class="relative">
                    <input type="text" v-model="city" class="rounded-[10px] bg-[#EBEBEB] border border-[#B1B1B1] py-2.5 pl-5 pr-9 text-[#696969] w-[183px]" placeholder="Куда едем?">
                    <svg class="absolute right-2 top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.7956 11 11.5587 10.6839 12.1213 10.1213C12.6839 9.55871 13 8.79565 13 8C13 7.20435 12.6839 6.44129 12.1213 5.87868C11.5587 5.31607 10.7956 5 10 5C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8C7 8.79565 7.31607 9.55871 7.87868 10.1213C8.44129 10.6839 9.20435 11 10 11ZM10 6C10.5304 6 11.0391 6.21071 11.4142 6.58579C11.7893 6.96086 12 7.46957 12 8C12 8.53043 11.7893 9.03914 11.4142 9.41421C11.0391 9.78929 10.5304 10 10 10C9.46957 10 8.96086 9.78929 8.58579 9.41421C8.21071 9.03914 8 8.53043 8 8C8 7.46957 8.21071 6.96086 8.58579 6.58579C8.96086 6.21071 9.46957 6 10 6Z" fill="url(#paint0_linear_253_2809)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.123C3 12.125 7.223 19 10 19C12.777 19 17 12.125 17 8.123C17 4.191 13.868 1 10 1C6.132 1 3 4.191 3 8.123ZM16 8.123C16 11.643 12.096 18 10 18C7.904 18 4 11.643 4 8.123C4 4.74 6.688 2 10 2C13.312 2 16 4.74 16 8.123Z" fill="url(#paint1_linear_253_2809)"/>
                        <defs>
                            <linearGradient id="paint0_linear_253_2809" x1="7.19626" y1="5" x2="13.0753" y2="5.33124" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B98CF2"/>
                            <stop offset="1" stop-color="#48BBDE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_253_2809" x1="3.45794" y1="0.999998" x2="17.1929" y2="1.6019" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B98CF2"/>
                            <stop offset="1" stop-color="#48BBDE"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="relative flex rounded-[10px] border border-[#B1B1B1] overflow-hidden w-[285px]">
                    <input :value="dateFrom" @input="dateFrom = $event.target.value" type="date" class="py-2.5 px-4 w-1/2 bg-[#EBEBEB] rounded-l-[10px]">
                    <input :value="dateTo" @input="dateTo = $event.target.value" type="date" class="py-2.5 px-4 w-1/2 bg-[#EBEBEB] rounded-r-[10px]">
                    <div class="h-full w-px top-0 left-1/2 -translate-x-1/2 bg-[#B1B1B1] absolute"></div>
                </div>
                <input type="text" class="rounded-[10px] bg-[#EBEBEB] border border-[#B1B1B1] py-2.5 px-5 text-[#696969] w-[183px]" placeholder="Гости, номера">
            </div>
        </div> -->
        <div class="w-full py-6 rounded-[30px] border border-[#7B7B7B] dark:border-white bg-white">
            <div class="px-6 md:px-12 xl:px-[90px] grid grid-cols-1 lg:grid-cols-4 gap-5 font-light">
                <input v-model="city" type="text" class="px-6 py-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Куда едем?">
                <div class="flex items-center bg-[#EBEBEB] dark:bg-transparent rounded-[15px] border border-[#B1B1B1] relative">
                    <input :value="dateFrom" @input="dateFrom = $event.target.value" type="date" class="w-1/2 py-4 px-6 bg-[#EBEBEB] dark:bg-transparent rounded-l-[15px] focus:outline-none focus:ring-0 cursor-pointer">
                    <input :value="dateTo" @input="dateTo = $event.target.value" type="date" class="w-1/2 py-4 px-6 bg-[#EBEBEB] dark:bg-transparent rounded-r-[15px] focus:outline-none focus:ring-0 cursor-pointer">
                    <div class="absolute w-px h-full top-0 left-1/2 bg-[#B1B1B1]"></div>
                </div>
                <input type="text" class="px-6 py-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Гости, номера">
                <button @click="modifyData" class="py-[14px] text-center text-white rounded-[15px] bg-gradient-to-l from-[#B98CF2] to-[#40BDDB] text-2xl transition-all duration-500 hover:shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)_inset]">Найти</button>
            </div>
        </div>
        <div class="flex flex-col gap-5"> 
            <div class="flex max-lg:flex-col lg:items-start gap-5 w-full">
                <div class="w-full lg:w-[30%] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[2px] rounded-[25px]">
                    <div class="py-6 md:py-8 xl:py-10 px-4 xl:px-7 bg-white rounded-[25px] w-full h-full flex flex-col gap-5">
                        <div class="flex flex-col gap-4">
                            <p class="font-light leading-[135.3%] text-base">Цена (₽)</p>
                            <div class="w-full relative flex rounded-[10px] border border-[#B1B1B1] overflow-hidden">
                                <input v-model="filters.minPrice" type="text" class="py-3 px-4 w-1/2 bg-[#EBEBEB] rounded-l-[10px]" placeholder="от 2000">
                                <input v-model="filters.maxPrice" type="text" class="py-3 px-4 w-1/2 bg-[#EBEBEB] rounded-r-[10px]" placeholder="до 1500000">
                                <div class="h-full w-px top-0 left-1/2 -translate-x-1/2 bg-[#B1B1B1] absolute"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2.5">
                            <p>Метро</p>
                            <div class="flex flex-col gap-0.5">
                                <select class="focus:outline-none focus:right-0" v-model="filters.station">
                                    <option value="Все" selected>Все</option>
                                    <option v-for="station in stations" :value="station">{{ station }}</option>
                                </select>
                                <div class="w-full h-px rounded-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE]"></div>
                            </div>
                        </div>
                        <button @click="filterApartments" class="text-white py-2 px-4 rounded-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE]">Применить</button>
                    </div>
                </div>
                <div class="w-full lg:w-[70%] flex flex-col gap-5">
                    <div class="flex items-center justify-between gap-4 leading-[135.3%] font-light">
                        <p class="text-2xl">Выбранные фильтры:</p>
                        <button @click="removeFilter" class="text-base relative after:absolute after:w-full after:h-px after:rounded-full after:bg-gradient-to-r after:from-[#B98CF2] after:to-[#48BBDE] after:left-0 after:bottom-0">Сбросить все фильтры</button>
                    </div>
                    <div class="flex items-center justify-between gap-4 leading-[135.3%] font-light">
                        <p class="text-2xl">Найдено {{ apartments.length }} вариантов</p>
                        <div class="flex items-center gap-7">
                            <p>Сортировка</p>
                            <select class="focus:outline-none focus:right-0">
                                <option value="" disabled selected>По популярности</option>
                                <option value="">Выбор 1</option>
                                <option value="">Выбор 2</option>
                                <option value="">Выбор 3</option>
                                <option value="">Выбор 4</option>
                                <option value="">Выбор 5</option>
                            </select>
                        </div>
                    </div>
                    <div class="bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[20px]" v-for="apartment in apartments">
                        <div class="p-3 bg-white rounded-[20px] w-full h-full flex max-md:flex-col md:items-start md:justify-between gap-5">
                            <div class="flex flex-col gap-2" v-if="apartment.image">
                                <img :src="`${config.public.APIbaseURL}/${image.path}`" alt="" v-for="image in apartment.image" class="w-full md:w-[300px] max-w-max object-cover aspect-video rounded-[13px]">
                            </div>
                            <div class="w-full h-72 rounded-xl bg-[#7C7C7C]" v-else></div>
                            <div class="flex flex-col gap-2.5 leading-[135.3%] grow">
                                <p class="text-xl font-normal">{{ apartment.city }}</p>
                                <p class="font-light text-base">{{ apartment.address }}</p>
                                <p class="font-light text-base">Станция метро - {{ apartment.station }}</p>
                            </div>
                            <div class="flex flex-col gap-1 items-start md:items-end">
                                <div class="bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[5px]">
                                    <div class="relative py-2 pl-4 pr-20 font-light leading-[135.3%] rounded-[5px] bg-[#D9D9D9] w-full h-full">
                                        <p class="text-sm">Превосходно</p>
                                        <p class="text-base text-white py-1.5 px-4 absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[5px]">8.8</p>
                                    </div>
                                </div>
                                <p class="text-[10px] text-[#696969]">256 отзывов</p>
                                <p>{{ apartment.pricePerDay }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[25px]">
                <div class="w-full h-full rounded-[25px] bg-white overflow-hidden">
                    <ClientOnly>
                        <YandexMap :coordinates="[55.755864, 37.617698]" :zoom="10">
                            <YandexMarker v-for="apartment in apartments" :coordinates="[apartment.location.lat, apartment.location.long]" :marker-id="apartment._id">
                                <template #component>
                                    <div class="flex flex-col h-fit gap-2">
                                        <p class="font-medium text-lg">{{ apartment.city }}</p>
                                        <p>{{ apartment.address }}</p>
                                    </div>
                                </template>
                            </YandexMarker>
                        </YandexMap>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { yandexMap, yandexMarker } from 'vue-yandex-maps'

    /* getData */
    const config = useRuntimeConfig()
    const { data, error } = await useFetch(`${config.public.APIbaseURL}/api/admin/getApartments`)

    /* modify data */
    const { city, dateFrom, dateTo} = storeToRefs(useSearchStore())
    const filterData = ref()
    const apartments = ref()
    const modifyData = () => {
        apartments.value = data.value
        filterData.value = apartments.value.filter(el => {
            const result = el.bookedDates.find(item => {
                return dateFrom.value && dateTo.value && new Date (item).toISOString().substring(0, 10) > dateFrom.value && new Date (item).toISOString().substring(0, 10) < dateTo.value
            })
            if (result) {
                return false
            }
            return true
        }) 
        apartments.value = filterData.value
    }
    modifyData()
    
    /* add undergrou, price, create filters */
    const stations = ref([])
    const prices = []
    const dates = []
    const filters = ref({
        minPrice: 0,
        maxPrice: 100000000,
        station: 'Все'
    })
    data.value.forEach(el => {
        if(stations.value.indexOf(el.station) === -1) {
            stations.value.push(el.station)
        }
        prices.push(el.pricePerDay)
    })
    filters.value.minPrice = Math.min(...prices)
    filters.value.maxPrice = Math.max(...prices)

    /* filterApartments */
    const filterApartments = () => {
        apartments.value = filterData.value    
        const filter = apartments.value.filter(el => {
            if (el.pricePerDay < filters.value.minPrice && filters.value.minPrice) {
                return false
            }
            if (el.pricePerDay > filters.value.maxPrice && filters.value.maxPrice) {
                return false
            }
            if (el.station != filters.value.station && filters.value.station != 'Все') {
                return false
            }
            return true
        })     
        apartments.value = filter
    }

    /* removeFilter */
    const removeFilter = () => {
        apartments.value = filterData.value
        filters.value.minPrice = Math.min(...prices)
        filters.value.maxPrice = Math.max(...prices)
        filters.value.station = 'Все'
    }    
</script>

<style>
    .yandex-container {
        height: 400px;
    }
    .yandex-balloon {
        height: 60px;
        width: 250px;
    }
</style>