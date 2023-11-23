<template>
    <div class="flex flex-col gap-5 py-10">
        <div class="flex md:items-end md:justify-between max-md:flex-col">
            <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Главное меню</p>
            <NuxtLink to="/admin/add" class="flex items-center w-fit py-2 px-5 gap-2.5 text-base md:text-lg xl:text-xl leading-[135.3%] border border-black rounded-full bg-[#D9D9D9]">
                <span>Добавить недвижимость</span>                
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M10.5 1V20" stroke="black" stroke-linecap="round"/>
                    <path d="M1 10.5L20 10.5" stroke="black" stroke-linecap="round"/>
                </svg>
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-5 rounded-[25px] bg-[#D9D9D9] px-12 py-7 text-xl font-light text-left max-lg:hidden">
            <div class="col-span-full px-7 pb-4 border-b border-black grid grid-cols-5 gap-x-10">
                <p class="w-fit col-span-3">Адрес</p>
                <p class="w-fit col-span-1">Редактирование</p>
                <button class="w-fit col-span-1">Удаление</button>
            </div>
            <div class="col-span-full grid grid-cols-5 gap-x-10" v-for="apartment in apartments">
                <p class="w-fit col-span-3">{{ apartment.city }}, {{ apartment.address }}</p>
                <NuxtLink :to="`/admin/edit-${apartment._id}`" class="w-fit col-span-1 underline underline-offset-2">изменить</NuxtLink>
                <button @click="deleteApartments(apartment._id)" class="w-fit col-span-1 underline underline-offset-2">удалить</button>
            </div>
        </div>
        <div class="flex flex-col gap-5 rounded-[25px] bg-[#D9D9D9] p-6 text-xl font-light lg:hidden">
            <div class="flex flex-col gap-2.5 w-full">
                <p>Отели</p>
                <div class="w-full bg-black h-px"></div>
                <div class="grid grid-cols-1 gap-12">
                    <div class="flex flex-col gap-4" v-for="apartment in apartments">
                        <div class="flex flex-col gap-4" v-if="apartment.image">
                            <img :src="`${config.public.APIbaseURL}/${image.path}`" alt="" v-for="image in apartment.image">
                        </div>
                        <div class="w-full h-72 rounded-xl bg-[#7C7C7C]" v-else></div>
                        <p>{{ apartment.city }}, {{ apartment.address }}</p>
                        <button @click="deleteApartments(apartment._id)" class="w-fit col-span-1 underline underline-offset-2">удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    const router = useRouter()
    const { data: apartments, error: errorApartments } = await useFetch(`${config.public.APIbaseURL}/api/admin/getApartments`)
    
    const deleteApartments = async (id) => {        
        const { data, error, pending } = await useFetch(`${config.public.APIbaseURL}/api/admin/deleteApartments/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
        if(data.value) {
            console.log(data.value)
            location.reload()
        }
        if(error.value) {
            console.log(error.value)
        }
    }
</script>