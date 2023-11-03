<template>
    <footer class="grid-container mb-[22px] text-white/50 text-xl font-light mt-auto" ref="height">
        <div class="bg-[#121212] border-2 border-white dark:bg-[#171717] rounded-[35px] py-6 md:py-8 xl:pt-10 xl:pb-[62px]">
            <div class="flex flex-col lg:items-center gap-9 xl:gap-4 px-6 md:px-12 xl:px-[90px]">
                <div class="flex max-lg:flex-col lg:justify-between lg:items-start gap-11 xl:gap-[86px]">
                    <img src="/images/icons/logoFooter.svg" alt="" class="w-fit">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-[30px] gap-x-8 md:gap-x-12 xl:gap-x-[73px]">
                        <NuxtLink to="/">Сдать жилье</NuxtLink>
                        <NuxtLink to="/">Бронирования</NuxtLink>
                        <NuxtLink to="/">Отзывы</NuxtLink>
                        <NuxtLink to="/">Контакты</NuxtLink>
                        <NuxtLink to="/">Помощь</NuxtLink>
                        <NuxtLink to="/">Профиль</NuxtLink>
                        <NuxtLink to="/">Политика лояльности</NuxtLink>
                        <NuxtLink to="/">Сертификаты</NuxtLink>
                    </div>
                    <img src="/images/icons/qrFooter.png" alt="" class="w-fit max-lg:hidden">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5 md:gap-8 xl:gap-[57px]">
                    <div class="flex items-center gap-4 md:gap-6 xl:gap-9">
                        <NuxtLink to="/">
                            <img src="/images/icons/vk.svg" alt="">
                        </NuxtLink>
                        <NuxtLink to="/">
                            <img src="/images/icons/tg.svg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="flex max-lg:flex-col lg:items-center gap-5 md:gap-7 xl:gap-10">
                        <p>Принимаем к оплате</p>
                        <div class="flex items-center gap-2.5">
                            <img src="/images/icons/visa.png" alt="">
                            <img src="/images/icons/mastercard.png" alt="">
                            <img src="/images/icons/mir.png" alt="">
                        </div>
                    </div>
                    <NuxtLink to="/" class="flex flex-col gap-[18px] items-center text-center text-white/70 text-xl font-extralight mt-1 w-fit">
                        <span>Разработка сайта</span>
                        <span class="rounded-[9px] border border-white/70 py-1 px-10">FILIPPOV</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

