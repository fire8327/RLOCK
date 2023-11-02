<template>
    <footer class="grid-container mb-[22px] text-white/50 text-xl font-light mt-auto" ref="height">
        <div class="bg-[#121212] border-2 border-white dark:bg-[#171717] rounded-[35px] pt-10 pb-[89px]">
            <div class="flex flex-col items-center gap-11 w-4/5 mx-auto">
                <div class="flex justify-between items-start gap-[86px]">
                    <p class="text-4xl font-semibold text-white/70 mt-2">LOGO</p>
                    <div class="grid grid-cols-4 gap-y-[30px] gap-x-[73px]">
                        <NuxtLink to="/">Сдать жилье</NuxtLink>
                        <NuxtLink to="/">Бронирования</NuxtLink>
                        <NuxtLink to="/">Отзывы</NuxtLink>
                        <NuxtLink to="/">Контакты</NuxtLink>
                        <NuxtLink to="/">Помощь</NuxtLink>
                        <NuxtLink to="/">Профиль</NuxtLink>
                        <NuxtLink to="/">Политика лояльности</NuxtLink>
                        <NuxtLink to="/">Сертификаты</NuxtLink>
                    </div>
                    <NuxtLink to="/" class="flex flex-col gap-[18px] items-center text-center text-white/70 text-xl font-extralight mt-1">
                        <span>Разработка сайта</span>
                        <span class="rounded-[9px] border border-white/70 py-1 px-10">FILIPPOV</span>
                    </NuxtLink>
                </div>
                <div class="flex items-center gap-[73px]">
                    <div class="flex items-center gap-[50px]">
                        <p>Мы в соцсетях</p>
                        <div class="flex items-center gap-9">
                            <NuxtLink to="/">
                                <img src="/images/icons/vk.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="/">
                                <img src="/images/icons/tg.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="/">
                                <img src="/images/icons/youtube.svg" alt="">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex items-center gap-10">
                        <p>Принимаем к оплате</p>
                        <div class="flex items-center gap-2.5">
                            <img src="/images/icons/union.png" alt="">
                            <img src="/images/icons/mastercard.png" alt="">
                            <img src="/images/icons/visa.png" alt="">
                            <img src="/images/icons/mir.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    /* const height = ref()
    const block = useHeightBlock()
    onMounted(() => {
        block.footerHeight = height.value.clientHeight
        window.addEventListener("resize", () => {
            block.footerHeight = height.value.clientHeight
        })
    }) */
</script>
