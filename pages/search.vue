<template>
    <div class="my-10 flex flex-col gap-5 w-full">
        <div class="flex items-start gap-5 w-full">
            <div class="w-[20%] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[2px] rounded-[25px]">
                <div class="py-6 md:py-8 xl:py-10 px-4 xl:px-7 bg-white rounded-[25px] w-full h-full flex flex-col gap-5">
                    <div class="flex flex-col gap-4">
                        <p class="font-light leading-[135.3%] text-base">Цена (₽)</p>
                        <div class="w-full relative flex rounded-[10px] border border-[#B1B1B1] overflow-hidden">
                            <input type="text" class="py-3 px-4 w-1/2 bg-[#EBEBEB] rounded-l-[10px]" placeholder="от 2000">
                            <input type="text" class="py-3 px-4 w-1/2 bg-[#EBEBEB] rounded-r-[10px]" placeholder="до 15000">
                            <div class="h-full w-px top-0 left-1/2 -translate-x-1/2 bg-[#B1B1B1] absolute"></div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p>Расположение</p>
                        <div class="flex items-center justify-between gap-4">
                            <p>Метро</p>
                            <div class="flex flex-col gap-0.5">
                                <select class="focus:outline-none focus:right-0">
                                    <option value="" disabled selected>Выбрать</option>
                                    <option value="">Метро 1</option>
                                    <option value="">Метро 2</option>
                                    <option value="">Метро 3</option>
                                    <option value="">Метро 4</option>
                                    <option value="">Метро 5</option>
                                </select>
                                <div class="w-full h-px rounded-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[50%] flex flex-col gap-5">
                <div class="flex items-center justify-between gap-4 leading-[135.3%] font-light">
                    <p class="text-2xl">Выбранные фильтры:</p>
                    <button class="text-base relative after:absolute after:w-full after:h-px after:rounded-full after:bg-gradient-to-r after:from-[#B98CF2] after:to-[#48BBDE] after:left-0 after:bottom-0">Сбросить все фильтры</button>
                </div>
                <div class="flex items-center justify-between gap-4 leading-[135.3%] font-light">
                    <p class="text-2xl">Найдено {{ apartments.length }} варианта</p>
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
                    <div class="p-3 bg-white rounded-[20px] w-full h-full flex items-start gap-5">
                        <div class="flex flex-col gap-2 w-[30%]" v-if="apartment.image">
                            <img :src="`${config.public.APIbaseURL}/${image.path}`" alt="" v-for="image in apartment.image" class="w-full h-full object-cover aspect-video">
                        </div>
                        <div class="w-full h-72 rounded-xl bg-[#7C7C7C]" v-else></div>
                        <div class="flex flex-col gap-2.5 leading-[135.3%]">
                            <p class="text-xl font-normal">{{ apartment.city }}</p>
                            <p class="font-light text-base">{{ apartment.address }}</p>
                        </div>
                        <div class="flex flex-col gap-1 items-end">
                            <div class="bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[5px]">
                                <div class="relative py-2 pl-4 pr-20 font-light leading-[135.3%] rounded-[5px] bg-[#D9D9D9] w-full h-full">
                                    <p class="text-sm">Превосходно</p>
                                    <p class="text-base text-white py-1.5 px-4 absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[5px]">8.8</p>
                                </div>
                            </div>
                            <p class="text-[10px] text-[#696969]">256 отзывов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[30%] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[25px]">
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
    const name = ref('Custom')

    const config = useRuntimeConfig()
    const { data: apartments, error: errorApartments } = await useFetch(`${config.public.APIbaseURL}/api/admin/getApartments`)
    const apartmentsLength = ref(apartments.value)
</script>

<style>
    .yandex-container {
        height: 700px;
    }
    .yandex-balloon {
        height: 60px;
        width: 250px;
    }
</style>