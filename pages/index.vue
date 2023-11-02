<template>
    <div class="flex flex-col gap-7 pt-12">
        <div class="flex items-center gap-[69px] text-black dark:text-white justify-between">
            <p class="text-[64px] uppercase pl-1.5">rlock</p>
            <p class="text-xl font-light leading-[172.8%]">В мире, где каждая поездка – это возможность создать свой уникальный момент, Rlock становится вашим надежным союзником в создании незабываемого отдыха, мы – кураторы ваших лучших воспоминаний.</p>
        </div>
        <div class="flex flex-col gap-5">
            <div class="w-full relative">
                <img src="/images/open/bg.png" alt="">
                <p class="uppercase text-[64px] text-white absolute z-[1] bottom-[30px] left-1/2 -translate-x-1/2 w-4/5">Откройте дверь к вашему идеальному дому </p>
            </div>
            <div class="w-full py-6 rounded-[30px] border border-[#7B7B7B] dark:border-white bg-white">
                <div class="w-4/5 mx-auto grid grid-cols-4 gap-5 font-light">
                    <input type="text" class="px-6 py-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Куда едем?">
                    <div class="flex items-center bg-[#EBEBEB] dark:bg-transparent rounded-[15px] border border-[#B1B1B1] relative py-4">
                        <input type="date" class="w-1/2 px-6 bg-[#EBEBEB] dark:bg-transparent rounded-l-[15px]">
                        <input type="date" class="w-1/2 px-6 bg-[#EBEBEB] dark:bg-transparent rounded-r-[15px]">
                        <div class="absolute w-px h-full top-0 left-1/2 bg-[#B1B1B1]"></div>
                    </div>
                    <input type="text" class="px-6 py-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Гости, номера">
                    <button class="py-[14px] text-center text-white rounded-[15px] bg-gradient-to-l from-[#B98CF2] to-[#40BDDB] text-2xl transition-all duration-500 hover:shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)_inset]">Найти</button>
                </div>
            </div>
        </div>    
        <div class="flex flex-col gap-20">
            <div class="flex items-center gap-5">
                <div class="bg-gradient-to-br from-[#48BBDE] to-[#B190F1] rounded-[25px] p-[3px] w-[35%]">
                    <div class="flex flex-col items-center text-center py-[68px] w-full rounded-[25px] bg-white text-[#131313] dark:bg-[#121212] dark:text-white">
                        <p class="text-[96px]">150+</p>
                        <p class="text-4xl leading-[135.3%] font-light -mt-2.5">вариантов: <br> квартиры, отели, дома</p>
                    </div>
                </div>
                <div class="flex flex-col gap-5 items-center w-[35%] text-white">
                    <div class="flex flex-col rounded-[25px] py-[30px] px-20 bg-gradient-to-r from-[#d2b4f7] to-[#88d3ea] backdrop-blur-[50px] dark:from-[#595959]/50 dark:to-[#595959]/50">
                        <p class="text-4xl font-light">Работаем в</p>
                        <div class="flex items-center gap-[30px]">
                            <p class="text-[96px]">95</p>
                            <p class="text-4xl leading-[135.3%] font-light">субъектах России</p>
                        </div>
                    </div>
                    <div class="flex items-center rounded-[23px] justify-center py-[33.5px] w-full bg-gradient-to-r from-[#d2b4f7] to-[#88d3ea] backdrop-blur-[50px] dark:from-[#595959]/50 dark:to-[#595959]/50">
                        <p class="text-[29px] leading-[135.3%] font-light">Стоимость без наценки</p>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-5 w-[27%] text-white">
                    <div class="relative flex items-center justify-center w-full py-[38px] bg-gradient-to-r from-[#d2b4f7] to-[#88d3ea] backdrop-blur-[50px] rounded-[25px] dark:from-[#595959]/50 dark:to-[#595959]/50 group">
                        <p class="text-[29px] leading-[135.3%] font-light text-center z-[1]">Удобная система бронирования жилья</p>
                        <div class="absolute w-full h-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] top-0 left-0 backdrop-blur-[50px] rounded-[25px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    </div>
                    <div class="bg-gradient-to-br from-[#48BBDE] to-[#B190F1] rounded-[25px] p-[3px] w-full">
                        <div class="flex flex-col items-center text-center py-[21px] w-full rounded-[25px] bg-white text-[#131313] dark:bg-[#121212] dark:text-white">
                            <p class="text-[64px]">24/7</p>
                            <p class="text-2xl leading-[135.3%] font-light -mt-2.5">Служба поддержки <br> на связи!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 rounded-[35px] text-white why_gradient py-[50px]">
                <div class="w-4/5 mx-auto flex items-start justify-between">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-2.5">
                            <p class="py-1 px-[30px] rounded-full border-2 border-white bg-white/30 w-fit">Быстро</p>
                            <p class="py-1 px-[30px] rounded-full border-2 border-white bg-white/30 w-fit">Надежный сервис</p>
                            <p class="py-1 px-[30px] rounded-full border-2 border-white bg-white/30 w-fit">Много отзывов</p>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <p class="py-1 px-[30px] rounded-full border-2 border-white bg-white/30 w-fit">Без комиссии</p>
                            <p class="py-1 px-[30px] rounded-full border-2 border-white bg-white/30 w-fit">Большой выбор</p>
                        </div>
                        <p class="py-1 px-[30px] rounded-full border-2 border-white bg-white/30 w-fit">Эксклюзивные предложения</p>
                    </div>
                    <p class="text-[64px] uppercase">Почему мы?</p>
                </div>
                <div class="w-4/5 mx-auto grid grid-cols-3 gap-5 items-end">
                    <div class="h-fit flex flex-col gap-1 py-[30px] px-9 rounded-[25px] border-2 border-white">
                        <p class="uppercase text-4xl leading-[135.3%]">отзывы и рейтинги</p>
                        <p class="text-lg leading-[173.3%]">Доверьтесь опыту других. Наши подробные отзывы и рейтинги помогут вам выбрать идеальное место для вашего отдыха. Высокие оценки говорят сами за себя – мы заботимся о вашем комфорте.</p>
                    </div>
                    <div class="h-fit flex flex-col gap-1 py-[30px] px-9 rounded-[25px] border-2 border-white">
                        <p class="uppercase text-4xl leading-[135.3%]">Гарантия Лучшей Цены</p>
                        <p class="text-lg leading-[173.3%]">Мы уверены в том, что предлагаем лучшие условия на рынке. Если вы найдете более выгодное предложение, мы с радостью сделаем вам специальное предложение. Ваш отдых – наш приоритет.</p>
                    </div>
                    <div class="h-fit flex flex-col gap-1 py-[30px] px-9 rounded-[25px] border-2 border-white">
                        <p class="uppercase text-4xl leading-[135.3%]">Разнообразие и Качество</p>
                        <p class="text-lg leading-[173.3%]">Имея в своей базе тысячи отелей, мы гарантируем широкий выбор, от уютных гестхаузов до роскошных курортов. Каждый отель, представленный на нашем сервисе, прошел строгий отбор по критериям комфорта и качества обслуживания.</p>
                    </div>
                </div>  
            </div>
        </div>    
    </div>
    <div class="col-[main-start/full-end] flex flex-col gap-9">
        <div class="flex items-end justify-between wrapper w-full">
            <p class="uppercase text-[64px] max-w-[549px] text-[#3E3E3E] dark:text-white">популярные варианты</p>
            <SliderButtons :prev="'variantsPrev'" :next="'variantsNext'"/>
        </div>
        <Swiper :slides-per-view="3.5" :space-between="20" :loop="true" :modules="[SwiperNavigation]" :navigation="{prevEl:'.variantsPrev', nextEl:'.variantsNext'}" class="w-full">
            <SwiperSlide v-for="variant in variants">
                <VariantsSlide v-bind="variant"/>
            </SwiperSlide>
        </Swiper>
    </div>
    <div class="w-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[2px] rounded-[35px]">        
        <div class="w-full bg-[#3E3E3E] text-white py-[60px] rounded-[35px]">
            <div class="flex items-center gap-[75px] w-4/5 mx-auto">
                <div class="flex flex-col gap-[30px] w-[65%]">
                    <p class="text-[64px] uppercase">есть вопросы? <br> мы готовы помочь</p>
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
                <div class="flex flex-col gap-4 w-[34%]">
                    <input type="text" class="w-full px-[30px] text-lg leading-[173.3%] py-[12.5px] placeholder-white rounded-[15px] border border-white bg-transparent focus:outline-none" placeholder="Имя">
                    <input type="text" class="w-full px-[30px] text-lg leading-[173.3%] py-[12.5px] placeholder-white rounded-[15px] border border-white bg-transparent focus:outline-none" placeholder="Номер телефона">
                    <textarea class="w-full px-[30px] text-lg leading-[173.3%] py-[12.5px] h-28 placeholder-white rounded-[15px] border border-white bg-transparent focus:outline-none resize-none" placeholder="Сообщение"></textarea>
                    <div class="flex flex-col gap-2.5 w-full leading-[173.3%]">
                        <div class="flex items-center gap-x-4 gap-y-2.5 flex-wrap text-sm">
                            <label class="flex items-center gap-2.5">
                                <input type="radio" name="question" class="w-4 h-4">
                                Общий вопрос
                            </label>    
                            <label class="flex items-center gap-2.5">
                                <input type="radio" name="question" class="w-4 h-4">
                                Техническая поддержка
                            </label>    
                            <label class="flex items-center gap-2.5">
                                <input type="radio" name="question" class="w-4 h-4">
                                Бронирование конкретного объекта
                            </label>    
                            <label class="flex items-center gap-2.5">
                                <input type="radio" name="question" class="w-4 h-4">
                                Другое
                            </label>    
                        </div>
                        <label class="flex items-start gap-2.5 text-xs">
                            <input type="checkbox" name="agree" class="w-3 h-3 mt-1">
                            Я соглашаюсь с условиями политики конфиденциальности 
                            и обработки персональных данных.
                        </label>
                    </div>
                    <button class="w-full py-[15px] text-center text-2xl leading-[135.3%] rounded-[15px] bg-gradient-to-l from-[#B98CF2] to-[#40BDDB]">Отправить</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-9 pb-20">
        <div class="flex items-end justify-between wrapper w-full">
            <p class="uppercase text-[64px] text-[#3E3E3E] dark:text-white">Последние отзывы</p>
            <SliderButtons :prev="'reviewsPrev'" :next="'reviewsNext'"/>
        </div>
        <Swiper :slides-per-view="2" :space-between="20" :loop="true" :modules="[SwiperNavigation]" :navigation="{prevEl:'.reviewsPrev', nextEl:'.reviewsNext'}" class="w-full">
            <SwiperSlide v-for="review in reviews">
                <ReviewsSlide v-bind="review"/>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
    const { data: variants, error: variantsError } = await useFetch(`https://fire8327.github.io/JSONs/variants.json`)
    const { data: reviews, error: reviewsError } = await useFetch(`https://fire8327.github.io/JSONs/reviews.json`)
</script>
