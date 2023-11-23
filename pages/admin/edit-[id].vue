<template>
    <div class="flex flex-col gap-5 py-10">
        <div class="flex md:items-end md:justify-between max-md:flex-col gap-4">
            <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Редактирование недвижимости</p>
            <div class="flex items-center gap-4">                
                <button @click="updateApartment" class="w-fit py-2 px-5 gap-2.5 text-base md:text-lg xl:text-xl leading-[135.3%] border border-black rounded-full bg-[#D9D9D9]">
                    Сохранить
                </button>
                <button @click="router.go(-1)" class="w-fit py-2 px-5 gap-2.5 text-base md:text-lg xl:text-xl leading-[135.3%] border border-black rounded-full bg-[#D9D9D9]">
                    Назад
                </button>
            </div>
        </div>
        <div class="w-full flex flex-col gap-5 text-black leading-[135.3%]">
            <div class="flex max-lg:flex-col lg:items-center gap-5">
                <input type="text" v-model="apartment[0].country" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Страна">
                <input type="text" v-model="apartment[0].region" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Область">
                <input type="text" v-model="apartment[0].city" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Город">
            </div>
            <div class="flex max-lg:flex-col lg:items-center gap-5">
                <input type="text" v-model="apartment[0].okrug" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Округ">
                <input type="text" v-model="apartment[0].district" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Район">
                <input type="text" v-model="apartment[0].branch" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Ветка метро">
            </div>
            <div class="flex max-lg:flex-col lg:items-center gap-5">
                <input type="text" v-model="apartment[0].station" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[50%]" placeholder="Станция метро">
                <input type="text" v-model="apartment[0].location.lat" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция x">
                <input type="text" v-model="apartment[0].location.long" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция y">
            </div>
            <div class="flex max-lg:flex-col lg:items-center gap-5">
                <input type="text" v-model="apartment[0].address" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[74%]" placeholder="Адрес">
                <input type="text" v-model="apartment[0].pricePerDay" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[26%]" placeholder="Цена">
            </div>
        </div>
    </div>
</template>

<script setup>
    const router= useRouter()
    const route = useRoute()

    const config = useRuntimeConfig()    
    const apartment = ref()
    const { data: apartments, error: errorApartments } = await useFetch(`${config.public.APIbaseURL}/api/admin/getApartments`)
    apartment.value =  apartments.value.filter(el => {
        return el._id == route.params.id
    })

    const updateApartment = async () => {
        const { data, error, pending } = await useFetch(`${config.public.APIbaseURL}/api/admin/editApartment/${route.params.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: {
                country: apartment.value[0].country,
                region: apartment.value[0].region,
                city: apartment.value[0].city,
                okrug: apartment.value[0].okrug,
                district: apartment.value[0].district,
                branch: apartment.value[0].branch,
                station: apartment.value[0].station,
                address: apartment.value[0].address,
                location: apartment.value[0].location,
                pricePerDay: apartment.value[0].pricePerDay
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