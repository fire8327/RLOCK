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
                <img v-if="imgSrc" :src="imgSrc" alt="">
                <div v-else class="rounded-xl bg-[#808080] h-[387px]"></div>
                <label class="w-full text-center py-2 bg-[#D9D9D9] border border-black rounded-full cursor-pointer">Редактировать фотографии<input :ref="inputFile" type="file" name="image" accept="image/*" hidden @change="inputChange"></label>
            </div>
            <div class="w-full xl:w-[70%] flex flex-col gap-5 text-black leading-[135.3%]">
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" v-model="apartment.country" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Страна">
                    <input type="text" v-model="apartment.region" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Область">
                    <input type="text" v-model="apartment.city" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Город">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" v-model="apartment.okrug" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Округ">
                    <input type="text" v-model="apartment.district" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Район">
                    <input type="text" v-model="apartment.branch" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Ветка метро">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" v-model="apartment.station" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[50%]" placeholder="Станция метро">
                    <input type="text" v-model="apartment.location.lat" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция x">
                    <input type="text" v-model="apartment.location.long" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция y">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" v-model="apartment.address" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[74%]" placeholder="Адрес">
                    <input type="text" v-model="apartment.pricePerDay" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[26%]" placeholder="Цена">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const imgSrc = ref()
    const imgName = ref()
    const imgFile = ref()
    async function inputChange(e) {
        const inputFile = e.target.files[0]
        imgFile.value = e.target.files[0]
        imgName.value = inputFile.name
        if(!inputFile) return
        const readData = (f) =>
        new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.readAsDataURL(f)
        })
        imgSrc.value = await readData(inputFile)
        console.log(imgSrc.value)
        console.log(imgName.value)
    }

    const config = useRuntimeConfig()
    const router = useRouter()

    const apartment = ref({
        country: "",
        region: "",
        city: "",
        okrug: "",
        district: "",
        branch: "",
        station: "",
        address: "",
        location: {
            lat: "",
            long: ""
        },
        pricePerDay: ""
    })

    const addApartment = async () => {        
        const { data:createApartments, error:errorApartments } = await useFetch(`${config.public.APIbaseURL}/api/admin/createApartment`, {
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
                location: apartment.value.location,
                pricePerDay: apartment.value.pricePerDay
            }
        })    
        if(createApartments.value) {
            console.log(createApartments.value)    
            console.log(imgFile.value)
            console.log(imgName.value)
            const formData = new FormData()
            formData.append('image', imgFile.value)   
            formData.append('apartmentId', createApartments.value._id)   
            formData.append('label', imgName.value)     
            const { data, error } = await useFetch(`${config.public.APIbaseURL}/api/admin/uploadImageApartment`, {
                method: 'POST',
                body: formData
            })    
            if(data.value) {
                console.log(data.value)
                router.push('/admin')
            }
            if(error.value) {
                console.log(error.value)
            }        
        }
        if(errorApartments.value) {
            console.log(errorApartments.value)
        }
    }
</script>
