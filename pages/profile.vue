<template>
    <div class="flex flex-col my-10 gap-7">
        <div class="w-full py-6 xl:py-8 px-6 md:px-12 xl:px-[90px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[25px]">
            <p class="NeutralFace text-2xl md:text-3xl xl:text-[32px] leading-[151.8%] uppercase text-white">Мой профиль</p>
        </div>
        <div class="flex lg:items-start max-lg:flex-col lg:justify-between gap-6 px-6 md:px-12 xl:px-[90px]">
            <div class="flex flex-col gap-5 lg:mt-5">
                <p class="leading-[135.3%] font-light text-2xl md:text-3xl xl:text-4xl">{{ user[0].name }}</p>
                <div class="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M13.5319 2.11957H1.46672C0.706934 2.11957 0.0808594 2.7 0.00585938 3.44021L6.495 9.92935C7.01675 10.4511 7.95261 10.4804 8.53632 9.89675L14.9929 3.44021C14.9178 2.7 14.2917 2.11957 13.5319 2.11957Z" fill="url(#paint0_linear_970_3383)"/>
                        <path d="M9.22852 10.5883C8.76612 11.051 8.14898 11.3057 7.49109 11.3057C6.85389 11.3057 6.23897 11.0564 5.80397 10.6211L0 4.81738V11.413C0 12.2218 0.658711 12.8804 1.46739 12.8804H13.5326C14.3413 12.8804 15 12.2218 15 11.413V4.81732L9.22852 10.5883Z" fill="url(#paint1_linear_970_3383)"/>
                        <defs>
                            <linearGradient id="paint0_linear_970_3383" x1="0.496088" y1="2.11957" x2="15.0733" y2="3.61923" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B98CF2"/>
                            <stop offset="1" stop-color="#48BBDE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_970_3383" x1="0.490654" y1="4.81732" x2="15.0747" y2="6.34597" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B98CF2"/>
                            <stop offset="1" stop-color="#48BBDE"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <p class="leading-[135.3%] font-light text-base md:text-lg xl:text-xl">{{ user[0].email }}</p>
                </div>
            </div>
            <div class="bg-gradient-to-br from-[#48BBDE] to-[#B190F1] rounded-[25px] p-[2px] lg:w-[30%]">
                <div class="w-full h-full bg-white p-5 pb-6 flex flex-col gap-5 rounded-[25px]">
                    <div class="flex flex-col">
                        <p class="font-bold text-lg md:text-xl xl:text-2xl">Есть вопрос?</p>
                        <p class="font-light text-sm     md:text-base xl:text-lg leading-[165.3%]">Заполните форму обратной связи и мы свяжемся с вами через 30 минут.</p>
                    </div>
                    <form @submit.prevent="submitForm" id="feedbackForm" class="flex flex-col gap-4 w-full">
                        <input required v-model="form.name" type="text" class="rounded-[10px] bg-[#EBEBEB] border border-[#B1B1B1] text-base py-2.5 px-5 placeholder-[#696969] focus:ring-0 focus:outline-none focus:appearance-none" placeholder="Ваше имя">
                        <input required v-model="form.email" type="email" class="rounded-[10px] bg-[#EBEBEB] border border-[#B1B1B1] text-base py-2.5 px-5 placeholder-[#696969] focus:ring-0 focus:outline-none focus:appearance-none" placeholder="Email">
                        <textarea v-model="form.msg" class="rounded-[10px] bg-[#EBEBEB] border border-[#B1B1B1] text-base py-2.5 px-5 placeholder-[#696969] focus:ring-0 focus:outline-none focus:appearance-none resize-none h-24" placeholder="Текст вопроса"></textarea>
                        <button class="text-white font-normal bg-gradient-to-r from-[#48BBDE] to-[#B190F1] rounded-[10px] text-center text-xl md:text-xl xl:text-2xl py-3 w-full">Отправить</button>
                        <button type="button" @click="message.title = null" class="fixed top-10 right-10 z-[41] cursor-pointer flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-[#131313] bg-white dark:text-white dark:bg-[#131313]" :class="message.type ? 'shadow-[0_0_20px_-7px]' : 'bg-red-500'" v-if="message.title">
                            <span>{{message.title}}</span>
                            <Icon name="material-symbols:close-rounded" class="text-xl"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { id } = storeToRefs(useUserStore())
    const config = useRuntimeConfig()
    const { data: users, error: errorUsers } = await useFetch(`${config.public.APIbaseURL}/api/admin/getAllUsers`)  
    const user = users.value.filter(el => {
        return el._id == id.value
    })

    const form = ref({
        name: "",
        email: "",
        msg: ""
    })

    const token = "6478570357:AAHRiEm9vOmK0oVMzoVAbxMGxIZl1NK86oc"
    const chat_id = "-4029823062"
    const URL = `https://api.telegram.org/bot${token}/sendMessage`

    let message = ref({title:null, type:true})

    const submitForm = async () => {
        let msg = "<b>Сообщение с сайта!</b>\n"
        + `<b>Имя:</b> ${form.value.name}\n`
        + `<b>Email:</b> ${form.value.email}\n`
        + `<b>Вопрос:</b> ${form.value.msg}\n` 
        const {data, error} = await useFetch(URL,{
            body:{
                'chat_id': chat_id,
                'parse_mode': 'html',
                'text': msg
            },
            method:'post'        
	    })
        if (error.value) return message.value.title = 'При отправке произошла ошибка!', message.value.type = false
	    message.value.title = 'Успешная отправка!', message.value.type = true 
        form.value.name = ""
        form.value.email = ""
        form.value.msg = ""
        setTimeout(() => {
            message.value.title = null
        }, 3000);
    }
</script>
