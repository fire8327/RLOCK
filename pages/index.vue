<template>
    <div class="flex flex-col gap-7 pt-12">
        <img src="/images/open/desktop.png" alt="" class="absolute top-0 left-0 z-[0] w-full lg:h-[550px] xl:h-[625px] max-md:hidden">
        <img src="/images/open/mobile.png" alt="" class="absolute top-0 left-0 w-full md:hidden">
        <div class="flex max-md:flex-col md:items-center gap-2.5 md:gap-12 xl:gap-[69px] text-white md:justify-between z-[1]">
            <p class="text-[32px] md:text-[50px] xl:text-[64px] uppercase pl-1.5 leading-[135.3%] NeutralFace">rlock</p>
            <p class="text-base md:text-lg xl:text-xl font-light leading-[172.8%]">В мире, где каждая поездка – это возможность создать свой уникальный момент, Rlock становится вашим надежным союзником в создании незабываемого отдыха, мы – кураторы ваших лучших воспоминаний.</p>
        </div>
        <div class="flex flex-col gap-5 z-[1]">
            <p class="uppercase max-lg:hidden text-[52px] xl:text-[64px] text-white max-w-[1200px] NeutralFace">Откройте дверь к вашему идеальному дому </p>
            <div class="w-full py-6 rounded-[30px] border border-[#7B7B7B] dark:border-white bg-white">
                <div class="px-6 md:px-12 xl:px-[90px] grid grid-cols-1 lg:grid-cols-4 gap-5 font-light">
                    <input v-model="city" type="text" class="px-6 py-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Куда едем?">
                    <div class="flex items-center bg-[#EBEBEB] dark:bg-transparent rounded-[15px] border border-[#B1B1B1] relative">
                        <input :value="dateFrom" @input="dateFrom = $event.target.value" type="date" class="w-1/2 py-4 px-6 bg-[#EBEBEB] dark:bg-transparent rounded-l-[15px] focus:outline-none focus:ring-0 cursor-pointer">
                        <input :value="dateTo" @input="dateTo = $event.target.value" type="date" class="w-1/2 py-4 px-6 bg-[#EBEBEB] dark:bg-transparent rounded-r-[15px] focus:outline-none focus:ring-0 cursor-pointer">
                        <div class="absolute w-px h-full top-0 left-1/2 bg-[#B1B1B1]"></div>
                    </div>
                    <input type="text" class="px-6 py-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Гости, номера">
                    <NuxtLink to="/search" class="py-[14px] text-center text-white rounded-[15px] bg-gradient-to-l from-[#B98CF2] to-[#40BDDB] text-2xl transition-all duration-500 hover:shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)_inset]">Найти</NuxtLink>
                </div>
            </div>
        </div>    
        <div class="flex flex-col gap-12 md:gap-16 xl:gap-20 mt-5 md:mt-9 xl:mt-12 z-[1]">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div class="bg-gradient-to-br from-[#48BBDE] to-[#B190F1] rounded-[25px] p-[3px] flex items-center justify-center">
                    <div class="flex flex-col items-center h-full text-center px-10 xl:px-11 py-6 md:py-12 xl:py-[74px] w-full rounded-[25px] bg-white text-[#131313] dark:bg-[#121212] dark:text-white">
                        <p class="text-[64px] md:text-[80px] xl:text-[96px] NeutralFace">150+</p>
                        <p class="text-2xl md:text-3xl xl:text-4xl leading-[135.3%] font-light -mt-2.5">вариантов: <br> квартиры, отели, дома</p>
                    </div>
                </div>
                <div class="flex flex-col gap-5 text-white">
                    <div class="flex flex-col gap-2.5 lg:gap-1 py-6 md:py-8 xl:py-10 px-6 md:px-12 xl:px-20 rounded-[25px] bg-gradient-to-r from-[#d2b4f7] to-[#88d3ea] backdrop-blur-[50px] dark:from-[#595959]/50 dark:to-[#595959]/50">
                        <p class="text-2xl md:text-3xl xl:text-4xl font-light">Работаем в</p>
                        <div class="flex items-center gap-4 md:gap-6 xl:gap-7">
                            <p class="text-[64px] md:text-[80px] xl:text-[96px] NeutralFace">95</p>
                            <p class="text-2xl md:text-3xl xl:text-4xl leading-[135.3%] font-light">субъектах России</p>
                        </div>
                    </div>
                    <p class="grow flex items-center justify-center py-6 text-2xl xl:text-[29px] leading-[135.3%] font-light text-center px-14 rounded-[23px] bg-gradient-to-r from-[#d2b4f7] to-[#88d3ea] backdrop-blur-[50px] dark:from-[#595959]/50 dark:to-[#595959]/50">Стоимость без наценки</p>
                </div>
                <div class="flex flex-col gap-5">
                    <p class="grow py-6 xl:py-10 flex items-center justify-center text-center text-2xl xl:text-[29px] leading-[135.3%] font-light px-8 rounded-[23px] bg-gradient-to-r from-[#d2b4f7] to-[#88d3ea] backdrop-blur-[50px] dark:from-[#595959]/50 dark:to-[#595959]/50 text-white">Удобная система бронирования жилья</p>
                    <div class="flex items-center justify-center bg-gradient-to-br from-[#48BBDE] to-[#B190F1] rounded-[25px] p-[3px]">
                        <div class="h-full w-full flex flex-col items-center text-center py-6 xl:py-5 px-7 md:px-12 xl:px-[76px] rounded-[25px] bg-white text-[#131313] dark:bg-[#121212] dark:text-white">
                            <p class="text-[64px] NeutralFace">24/7</p>
                            <p class="text-2xl leading-[135.3%] font-light -mt-2.5">Служба поддержки <br> на связи!</p>
                        </div>
                    </div>
                </div>
            </div>           
            <div class="flex flex-col gap-5 lg:gap-3 rounded-[35px] text-white why_gradient py-10 xl:py-[50px]">
                <div class="px-6 md:px-12 xl:px-[90px] flex max-lg:flex-col items-start lg:justify-between gap-5">
                    <div class="flex items-center gap-2.5 flex-wrap w-full lg:max-w-[55%] xl:max-w-[45%]">
                        <p class="py-1 px-7 rounded-full border-2 border-white bg-white/30 w-fit">Быстро</p>
                        <p class="py-1 px-7 rounded-full border-2 border-white bg-white/30 w-fit">Надежный сервис</p>
                        <p class="py-1 px-7 rounded-full border-2 border-white bg-white/30 w-fit">Много отзывов</p>
                        <p class="py-1 px-7 rounded-full border-2 border-white bg-white/30 w-fit">Без комиссии</p>
                        <p class="py-1 px-7 rounded-full border-2 border-white bg-white/30 w-fit">Большой выбор</p>
                        <p class="py-1 px-7 rounded-full border-2 border-white bg-white/30 w-fit">Эксклюзивные предложения</p>
                    </div>
                    <p class="text-[40px] md:text-[52px] xl:text-[64px] uppercase leading-[135.3%] max-lg:order-first NeutralFace">Почему мы?</p>
                </div>                
                <div class="px-6 md:px-12 xl:px-[90px] grid grid-cols-1 lg:grid-cols-3 gap-5 items-end">
                    <div class="h-fit flex flex-col xl:gap-1 py-6 md:py-7 xl:py-8 px-5 md:px-7 xl:px-9 rounded-[25px] border-2 border-white">
                        <p class="uppercase text-[32px] xl:text-4xl leading-[135.3%] NeutralFace">отзывы и рейтинги</p>
                        <p class="text-base xl:text-lg leading-[173.3%]">Доверьтесь опыту других. Наши подробные отзывы и рейтинги помогут вам выбрать идеальное место для вашего отдыха. Высокие оценки говорят сами за себя – мы заботимся о вашем комфорте.</p>
                    </div>
                    <div class="h-fit flex flex-col xl:gap-1 py-6 md:py-7 xl:py-8 px-5 md:px-7 xl:px-9 rounded-[25px] border-2 border-white">
                        <p class="uppercase text-[32px] xl:text-4xl leading-[135.3%] NeutralFace">Гарантия Лучшей Цены</p>
                        <p class="text-base xl:text-lg leading-[173.3%]">Мы уверены в том, что предлагаем лучшие условия на рынке. Если вы найдете более выгодное предложение, мы с радостью сделаем вам специальное предложение. Ваш отдых – наш приоритет.</p>
                    </div>
                    <div class="h-fit flex flex-col xl:gap-1 py-6 md:py-7 xl:py-8 px-5 md:px-7 xl:px-9 rounded-[25px] border-2 border-white">
                        <p class="uppercase text-[32px] xl:text-4xl leading-[135.3%] NeutralFace">Разнообразие и Качество</p>
                        <p class="text-base xl:text-lg leading-[173.3%]">Имея в своей базе тысячи отелей, мы гарантируем широкий выбор, от уютных гестхаузов до роскошных курортов. Каждый отель, представленный на нашем сервисе, прошел строгий отбор по критериям комфорта и качества обслуживания.</p>
                    </div>
                </div>  
            </div>
        </div>    
    </div>
    <div class="col-[main-start/full-end] flex flex-col gap-10">
        <div class="flex items-end justify-between wrapper w-full">
            <p class="uppercase text-[40px] md:text-[50px] xl:text-[64px] max-w-[549px] text-[#3E3E3E] dark:text-white NeutralFace">популярные варианты</p>
            <SliderButtons class="max-lg:hidden" :prev="'variantsPrev'" :next="'variantsNext'"/>
        </div>
        <div class="flex flex-col gap-5">            
            <Swiper :space-between="20" :loop="true" :modules="[SwiperNavigation, SwiperScrollbar]"
             :navigation="{prevEl:'.variantsPrev', nextEl:'.variantsNext'}" :scrollbar="{el:'.scrollVariants'}"
             :breakpoints="
             {
                375: {
                    'slidesPerView': 1
                },
                768: {
                    'slidesPerView': 2
                },
                1024: {
                    'slidesPerView': 3
                },
                1280: {
                    'slidesPerView': 3.5
                }
             }" class="w-full">
                <SwiperSlide v-for="variant in variants">
                    <VariantsSlide v-bind="variant"/>
                </SwiperSlide>
            </Swiper>
            <div class="scrollVariants w-1/3 lg:hidden mx-auto bg-[#D9D9D9] h-[3px] rounded-full"></div>
        </div>
    </div>
    <div class="flex max-md:flex-col lg:items-center gap-5">
        <div class="flex grow gap-4 xl:justify-between max-xl:flex-col xl:items-end rounded-[30px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[2px] text-white h-full">
            <div class="flex flex-col gap-9 px-6 max-md:pt-10 xl:pr-0 xl:pl-[90px] max-xl:pb-0 md:py-12 h-full">
                <div class="flex flex-col gap-4">
                    <p class="text-[32px] md:text-4xl xl:text-[40px] leading-[135.3%] uppercase NeutralFace">Мобильное приложение</p>
                    <div class="flex flex-col gap-2.5 text-lg font-medium leading-[173.3%]">
                        <div class="flex items-start gap-2.5">
                            <div class="bg-white w-2.5 h-2.5 rounded-[3px] shrink-0 mt-2.5"></div>
                            <p>Удобство и мобильность</p>
                        </div>
                        <div class="flex items-start gap-2.5">
                            <div class="bg-white w-2.5 h-2.5 rounded-[3px] shrink-0 mt-2.5"></div>
                            <p>Быстрый поиск жилья прямо в телефоне</p>
                        </div>
                        <div class="flex items-start gap-2.5">
                            <div class="bg-white w-2.5 h-2.5 rounded-[3px] shrink-0 mt-2.5"></div>
                            <p>Моментальные push-уведомления о любых изменениях</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-5 xl:gap-7">
                    <NuxtLink to="/">
                        <img src="/images/app/google.png" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/images/app/apple.png" alt="">
                    </NuxtLink>
                </div>
            </div>
            <img src="/images/app/phone.png" alt="" class="-mb-0.5 -mr-0.5 w-fit max-md:self-end md:hidden xl:block">
        </div>
        <div class="bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[23px] p-[3px] h-full">
            <div class="bg-white w-full h-full rounded-[23px] flex items-center justify-center overflow-hidden">
                <img src="/images/app/qr.png" alt="">
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-9">
        <div class="flex items-end justify-between wrapper w-full">
            <p class="uppercase text-[40px] md:text-[50px] xl:text-[64px] max-w-[549px] text-[#3E3E3E] dark:text-white NeutralFace">Последние отзывыы</p>
            <SliderButtons class="max-lg:hidden" :prev="'reviewsPrev'" :next="'reviewsNext'"/>
        </div>
        <div class="flex flex-col gap-5">            
            <Swiper :space-between="20" :loop="true" :modules="[SwiperNavigation, SwiperScrollbar]" :navigation="{prevEl:'.reviewsPrev', nextEl:'.reviewsNext'}"  :scrollbar="{el:'.scrollReviews'}"
                :breakpoints="
                {
                    375: {
                        'slidesPerView': 1
                    },
                    1024: {
                        'slidesPerView': 2
                    }
                }" class="w-full">
                <SwiperSlide v-for="review in reviews">
                    <ReviewsSlide v-bind="review"/>
                </SwiperSlide>
            </Swiper>
            <div class="scrollReviews w-1/3 lg:hidden mx-auto bg-[#D9D9D9] h-[3px] rounded-full"></div>
        </div>
    </div>
    <div class="w-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[2px] rounded-[35px] mb-20">        
        <div class="w-full h-full dark:bg-[#3E3E3E] text-white py-10 md:py-12 xl:py-[60px] rounded-[35px]">
            <div class="flex max-lg:flex-col lg:items-center gap-12 md:gap-16 xl:gap-[75px] px-6 md:px-12 xl:px-[90px]">
                <div class="flex flex-col gap-[30px] w-full lg:w-[70%]">
                    <p class="text-[40px] md:text-[50px] xl:text-[64px] uppercase NeutralFace">есть вопросы? <br> мы готовы помочь</p>
                    <p class="text-lg leading-[173.3%]">Мы уверены в том, что предлагаем лучшие условия на рынке. Если вы найдете более выгодное предложение, мы с радостью сделаем вам специальное предложение. Ваш отдых – наш приоритет.</p>
                    <div class="flex flex-col gap-6 text-lg leading-[173.3%]">
                        <NuxtLink to="/" class="flex items-center gap-[18px]">
                            <img src="/images/icons/phone.svg" alt="">
                            <span>+7 999 325 99 34</span>
                        </NuxtLink>
                        <NuxtLink to="/" class="flex items-center gap-[18px]">
                            <img src="/images/icons/email.svg" alt="">
                            <span>example123@rlock.info</span>
                        </NuxtLink>
                        <div class="flex items-center gap-[18px]">
                            <img src="/images/icons/clock.svg" alt="">
                            <span>Работаем 24/7</span>
                        </div>
                    </div>
                </div>
                <FormKit id="feedbackForm" type="form" form-class="flex flex-col gap-4 w-full lg:w-[35%]" @submit="submitForm" :actions="false">
                    <FormKit v-model="form.name" validation="required|length:2" name="Имя" type="text" outer-class="$remove:mb-4" inner-class="$remove:mb-1 rounded-[15px] $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full px-7 text-lg leading-[173.3%] py-[12.5px] placeholder-white rounded-[15px] border border-white bg-transparent focus:outline-none" placeholder="Имя"/>
                    <FormKit v-model="form.phone" validation="required|length:11" name="Номер телефона" type="text" outer-class="$remove:mb-4" inner-class="$remove:mb-1 rounded-[15px] $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full px-7 text-lg leading-[173.3%] py-[12.5px] placeholder-white rounded-[15px] border border-white bg-transparent focus:outline-none" placeholder="Номер телефона"/>
                    <FormKit v-model="form.msg" name="Сообщение" type="textarea" outer-class="$remove:mb-4" inner-class="$remove:mb-1 rounded-[15px] $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 $remove:focus-within:ring-2" input-class="$remove:text-gray-700 $remove:border-none w-full px-7 text-lg leading-[173.3%] py-[12.5px] h-28 placeholder-white rounded-[15px] border border-white bg-transparent focus:outline-none resize-none" placeholder="Сообщение"></FormKit>
                    <div class="flex flex-col gap-2.5 w-full leading-[173.3%]">
                        <FormKit type="radio" wrapper-class="flex items-center gap-2.5 $remove:mb-1" outer-class="$remove:mb-4" decorator-icon-class="$remove:p-[5px]" decorator-class="$remove:bg-white $remove:w-5 $remove:h-5 $remove:bg-gradient-to-b $remove:ring-1 $remove:mr-2 $remove:peer-checked:text-blue-500 peer-checked:text-white w-4 h-4 border border-white" 
                        options-class="flex items-center gap-x-4 gap-y-2.5 flex-wrap" fieldset-class="$remove:border $remove:px-2 $remove:pb-1" v-model="form.radio" 
                        :options="['Общий вопрос','Техническая поддержка','Бронирование конкретного объекта','Другое']"/>
                        <FormKit type="checkbox" validation="accepted" decorator-icon-class="$remove:p-[3px] p-[1px]" decorator-class="$remove:mr-2 $remove:w-5 $remove:h-5 w-3 h-3 mt-1 $remove:bg-white $remove:bg-gradient-to-b $remove:ring-1 $remove:peer-checked:text-blue-500 peer-checked:text-white border border-white" wrapper-class="$remove:mb-1 $remove:items-center items-start gap-2.5" :validation-messages="{accepted: 'Пожалуйста, примите условия политики конфиденциальности и обработки персональных данных'}" name="Согласие" label="Я соглашаюсь с условиями политики конфиденциальности и обработки персональных данных"/>
                    </div>
                    <FormKit type="submit" wrapper-class="$remove:mb-1" outer-class="$remove:mb-4" input-class="$remove:focus-visible:outline-blue-600 $remove:focus-visible:outline-offset-2 $remove:bg-blue-600 $remove:focus-visible:outline-2 $remove:inline-flex $remove:text-white $remove:text-sm w-full py-[15px] text-center text-2xl leading-[135.3%] rounded-[15px] bg-white text-[#3E3E3E] dark:text-white dark:bg-gradient-to-l from-[#B98CF2] to-[#40BDDB]">Отправить</FormKit>
                </FormKit>
                <button type="button" @click="message.title = null" class="fixed top-10 right-10 z-10 flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-[#131313] bg-white dark:text-white dark:bg-[#131313]" :class="message.type ? 'shadow-[0_0_20px_-7px]' : 'bg-red-500'" v-if="message.title">
                    <span>{{message.title}}</span>
                    <Icon name="material-symbols:close-rounded" class="text-xl"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reset } from '@formkit/core'
    const { data: variants, error: variantsError } = await useFetch(`https://fire8327.github.io/JSONs/variants.json`)
    const { data: reviews, error: reviewsError } = await useFetch(`https://fire8327.github.io/JSONs/reviews.json`)


    const form = ref({
        name: "",
        phone: "",
        msg: "",
        radio: ""
    })

    const token = "6478570357:AAHRiEm9vOmK0oVMzoVAbxMGxIZl1NK86oc"
    const chat_id = "-4029823062"
    const URL = `https://api.telegram.org/bot${token}/sendMessage`

    let message = ref({title:null, type:true})

    const submitForm = async () => {
        let msg = "<b>Сообщение с сайта!</b>\n"
        + `<b>Имя:</b> ${form.value.name}\n`
        + `<b>Номер телефона:</b> ${form.value.phone}\n`
        + `<b>Сообщение:</b> ${form.value.msg}\n` 
        + `<b>Вопрос:</b> ${form.value.radio}\n` 
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
        reset('feedbackForm')
        setTimeout(() => {
            message.value.title = null
        }, 3000);
    }


    const { city, dateFrom, dateTo} = storeToRefs(useSearchStore())
</script>

<style>
    .swiper-scrollbar-drag {
        @apply bg-gradient-to-l from-[#B98CF2] to-[#40BDDB]
    }
    .formkit-wrapper > span {
        @apply text-white mt-0        
    }
</style>