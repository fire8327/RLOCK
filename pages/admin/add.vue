<template>
    <div class="flex flex-col gap-5 py-10">
        <div class="flex md:items-end md:justify-between max-md:flex-col gap-4">
            <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Добавление недвижимости</p>
            <button @click="addApartment" class="w-fit py-2 px-5 gap-2.5 text-base md:text-lg xl:text-xl leading-[135.3%] border border-black rounded-full bg-[#D9D9D9]">
                Сохранить
            </button>
        </div>
        <div class="flex gap-5 max-xl:flex-col">
            <div class="flex flex-col gap-5 w-full xl:w-[30%]">
                <div class="rounded-xl bg-[#808080] h-[387px]"></div>
                <button class="w-full text-center py-2 bg-[#D9D9D9] border border-black rounded-full">Редактировать фотографии</button>
                {{ apartment }}
            </div>
            <div class="w-full xl:w-[70%] flex flex-col gap-5 text-black leading-[135.3%]">
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" v-model="apartment.country" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Страна">
                    <input type="text" v-model="apartment.region" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Область">
                    <input type="text" v-model="apartment.city" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Город">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" v-model="apartment.okrug" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Округ">
                    <input type="text" v-model="apartment.district" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Ветка метро">
                    <input type="text" v-model="apartment.branch" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Метро">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" v-model="apartment.station" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[50%]" placeholder="Линия метро">
                    <input type="text" v-model="apartment.address" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция">
                    <input type="text" v-model="apartment.location" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция">
                </div>
                <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[74%]" placeholder="Адрес">
            </div>
        </div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()

    const apartment = ref({
        country: "",
        region: "",
        city: "",
        okrug: "",
        district: "",
        branch: "",
        station: "",
        address: "",
        location: ""
    })

    const router = useRouter()

    const addApartment = async () => {        
        const { data, error, pending } = await useFetch(`${config.public.APIbaseURL}/api/admin/createApartment`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: {
                country: apartment.value.country,
                region: apartment.value.region,
                city: apartment.value.city,
                okrug: apartment.value.okrug,
                district: apartment.value.district,
                branch: apartment.value.branch,
                station: apartment.value.station,
                address: apartment.value.address,
                location: apartment.value.location
            }
        })    
        if(data.value) {
            console.log(data.value)
            router.push('/admin')
        }
        if(error.value) {
            console.log(error.value)
        }
    }
</script>
