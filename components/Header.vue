<template>
    <header class="text-[#131313] dark:text-white pt-[30px] relative flex z-40" ref="height">
        <div class="max-lg:hidden w-full grid-container">
            <div class="flex items-center justify-between">            
                <UseDark v-slot="{ isDark, toggleDark }">
                    <button @click="toggleDark()">
                        <img src="/images/icons/logoHeader.svg" alt="" class="w-fit">
                    </button>
                </UseDark>
                <div class="flex items-center gap-[50px] px-[86px] py-3.5 text-xl rounded-full border border-[#131313] dark:border-white">
                    <NuxtLink to="/" class="relative after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-l after:from-[#B98CF2] after:to-[#48BBDE] after:transition-opacity after:opacity-0 after:duration-500 hover:after:opacity-100">
                        Мои бронирования
                    </NuxtLink> 
                    <NuxtLink to="/" class="relative after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-l after:from-[#B98CF2] after:to-[#48BBDE] after:transition-opacity after:opacity-0 after:duration-500 hover:after:opacity-100">
                        Помощь
                    </NuxtLink> 
                    <NuxtLink to="/" class="relative after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-l after:from-[#B98CF2] after:to-[#48BBDE] after:transition-opacity after:opacity-0 after:duration-500 hover:after:opacity-100">
                        Сдать жилье
                    </NuxtLink> 
                    <div class="flex items-center gap-[30px]">                    
                        <NuxtLink to="/" class="group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                                <path class="fill-[#131313] dark:fill-white" d="M18.5156 0.5625C16.0031 0.5625 13.8375 1.75664 12.6562 3.73477C11.475 1.75664 9.30937 0.5625 6.79688 0.5625C4.9949 0.564671 3.26735 1.28147 1.99316 2.55566C0.718965 3.82985 0.00217087 5.5574 0 7.35938C0 10.7098 2.10938 14.2113 6.25781 17.7645C8.17325 19.3944 10.2414 20.8359 12.4336 22.0688C12.502 22.1057 12.5785 22.125 12.6562 22.125C12.734 22.125 12.8105 22.1057 12.8789 22.0688C15.0711 20.8359 17.1393 19.3944 19.0547 17.7645C23.2031 14.2113 25.3125 10.7098 25.3125 7.35938C25.3103 5.5574 24.5935 3.82985 23.3193 2.55566C22.0452 1.28147 20.3176 0.564671 18.5156 0.5625ZM12.6562 21.1195C11.0156 20.1867 0.9375 14.1645 0.9375 7.35938C0.939361 5.80594 1.55728 4.31667 2.65573 3.21823C3.75417 2.11978 5.24344 1.50186 6.79688 1.5C9.2707 1.5 11.3496 2.82539 12.2227 4.9582C12.258 5.04418 12.318 5.11771 12.3953 5.16946C12.4725 5.22121 12.5633 5.24884 12.6562 5.24884C12.7492 5.24884 12.84 5.22121 12.9172 5.16946C12.9944 5.11771 13.0545 5.04418 13.0898 4.9582C13.9629 2.82539 16.0418 1.5 18.5156 1.5C20.0691 1.50186 21.5583 2.11978 22.6568 3.21823C23.7552 4.31667 24.3731 5.80594 24.375 7.35938C24.375 14.1562 14.2969 20.1867 12.6562 21.1195Z"/>
                                <path class="fill-none transition-all duration-500 group-hover:fill-[url(#paint0_linear_30_913)]" d="M12.6562 21.1195C11.0156 20.1867 0.9375 14.1645 0.9375 7.35938C0.939361 5.80594 1.55728 4.31667 2.65573 3.21823C3.75417 2.11978 5.24344 1.50186 6.79688 1.5C9.2707 1.5 11.3496 2.82539 12.2227 4.9582C12.258 5.04418 12.318 5.11771 12.3953 5.16946C12.4725 5.22121 12.5633 5.24884 12.6562 5.24884C12.7492 5.24884 12.84 5.22121 12.9172 5.16946C12.9944 5.11771 13.0545 5.04418 13.0898 4.9582C13.9629 2.82539 16.0418 1.5 18.5156 1.5C20.0691 1.50186 21.5583 2.11978 22.6568 3.21823C23.7552 4.31667 24.3731 5.80594 24.375 7.35938C24.375 14.1562 14.2969 20.1867 12.6562 21.1195Z"/>
                                <defs>
                                    <linearGradient id="paint0_linear_30_913" x1="0.827979" y1="0.562498" x2="25.6005" y2="2.20101" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B98CF2"/>
                                        <stop offset="1" stop-color="#48BBDE"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/" class="group">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="stroke-[#131313] dark:stroke-white fill-none transition-all duration-500 group-hover:fill-[url(#paint0_linear_30_876)]" d="M5 22.5C5 21.1739 5.52678 19.9021 6.46447 18.9645C7.40215 18.0268 8.67392 17.5 10 17.5H20C21.3261 17.5 22.5979 18.0268 23.5355 18.9645C24.4732 19.9021 25 21.1739 25 22.5C25 23.163 24.7366 23.7989 24.2678 24.2678C23.7989 24.7366 23.163 25 22.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5Z" stroke-linejoin="round"/>
                                    <path class="stroke-[#131313] dark:stroke-white fill-none transition-all duration-500 group-hover:fill-[url(#paint1_linear_30_876)]" d="M18.75 8.75C18.75 10.8211 17.0711 12.5 15 12.5C12.9289 12.5 11.25 10.8211 11.25 8.75C11.25 6.67893 12.9289 5 15 5C17.0711 5 18.75 6.67893 18.75 8.75Z"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_30_876" x1="5.65421" y1="17.5" x2="24.8792" y2="20.3885" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B98CF2"/>
                                        <stop offset="1" stop-color="#48BBDE"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_30_876" x1="11.4953" y1="5" x2="18.8441" y2="5.41406" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B98CF2"/>
                                        <stop offset="1" stop-color="#48BBDE"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6 px-[15px] sm:px-5 pt-6 pb-10 bg-white dark:bg-[#121212] text-[#131313] dark:text-white z-40 col-span-full lg:hidden absolute w-full left-0 rounded-b-2xl transition-all duration-500 top-0" :class="{'-translate-y-full' : !isMenuShow}">
            <div class="flex items-center justify-between">
                <NuxtLink to="/">
                    <img src="/images/icons/logoHeader.svg" alt="">
                </NuxtLink>
                <div class="flex items-center gap-6">
                    <NuxtLink to="/" class="group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                            <path class="fill-black dark:fill-white" d="M18.5156 0.5625C16.0031 0.5625 13.8375 1.75664 12.6562 3.73477C11.475 1.75664 9.30937 0.5625 6.79688 0.5625C4.9949 0.564671 3.26735 1.28147 1.99316 2.55566C0.718965 3.82985 0.00217087 5.5574 0 7.35938C0 10.7098 2.10938 14.2113 6.25781 17.7645C8.17325 19.3944 10.2414 20.8359 12.4336 22.0688C12.502 22.1057 12.5785 22.125 12.6562 22.125C12.734 22.125 12.8105 22.1057 12.8789 22.0688C15.0711 20.8359 17.1393 19.3944 19.0547 17.7645C23.2031 14.2113 25.3125 10.7098 25.3125 7.35938C25.3103 5.5574 24.5935 3.82985 23.3193 2.55566C22.0452 1.28147 20.3176 0.564671 18.5156 0.5625ZM12.6562 21.1195C11.0156 20.1867 0.9375 14.1645 0.9375 7.35938C0.939361 5.80594 1.55728 4.31667 2.65573 3.21823C3.75417 2.11978 5.24344 1.50186 6.79688 1.5C9.2707 1.5 11.3496 2.82539 12.2227 4.9582C12.258 5.04418 12.318 5.11771 12.3953 5.16946C12.4725 5.22121 12.5633 5.24884 12.6562 5.24884C12.7492 5.24884 12.84 5.22121 12.9172 5.16946C12.9944 5.11771 13.0545 5.04418 13.0898 4.9582C13.9629 2.82539 16.0418 1.5 18.5156 1.5C20.0691 1.50186 21.5583 2.11978 22.6568 3.21823C23.7552 4.31667 24.3731 5.80594 24.375 7.35938C24.375 14.1562 14.2969 20.1867 12.6562 21.1195Z"/>
                            <path class="fill-none transition-all duration-500 group-hover:fill-[url(#paint0_linear_30_913)]" d="M12.6562 21.1195C11.0156 20.1867 0.9375 14.1645 0.9375 7.35938C0.939361 5.80594 1.55728 4.31667 2.65573 3.21823C3.75417 2.11978 5.24344 1.50186 6.79688 1.5C9.2707 1.5 11.3496 2.82539 12.2227 4.9582C12.258 5.04418 12.318 5.11771 12.3953 5.16946C12.4725 5.22121 12.5633 5.24884 12.6562 5.24884C12.7492 5.24884 12.84 5.22121 12.9172 5.16946C12.9944 5.11771 13.0545 5.04418 13.0898 4.9582C13.9629 2.82539 16.0418 1.5 18.5156 1.5C20.0691 1.50186 21.5583 2.11978 22.6568 3.21823C23.7552 4.31667 24.3731 5.80594 24.375 7.35938C24.375 14.1562 14.2969 20.1867 12.6562 21.1195Z"/>
                            <defs>
                                <linearGradient id="paint0_linear_30_913" x1="0.827979" y1="0.562498" x2="25.6005" y2="2.20101" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B98CF2"/>
                                    <stop offset="1" stop-color="#48BBDE"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/" class="group">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-black dark:stroke-white fill-none transition-all duration-500 group-hover:fill-[url(#paint0_linear_30_876)]" d="M5 22.5C5 21.1739 5.52678 19.9021 6.46447 18.9645C7.40215 18.0268 8.67392 17.5 10 17.5H20C21.3261 17.5 22.5979 18.0268 23.5355 18.9645C24.4732 19.9021 25 21.1739 25 22.5C25 23.163 24.7366 23.7989 24.2678 24.2678C23.7989 24.7366 23.163 25 22.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5Z" stroke-linejoin="round"/>
                                <path class="stroke-black dark:stroke-white fill-none transition-all duration-500 group-hover:fill-[url(#paint1_linear_30_876)]" d="M18.75 8.75C18.75 10.8211 17.0711 12.5 15 12.5C12.9289 12.5 11.25 10.8211 11.25 8.75C11.25 6.67893 12.9289 5 15 5C17.0711 5 18.75 6.67893 18.75 8.75Z"/>
                                <defs>
                                <linearGradient id="paint0_linear_30_876" x1="5.65421" y1="17.5" x2="24.8792" y2="20.3885" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B98CF2"/>
                                    <stop offset="1" stop-color="#48BBDE"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_30_876" x1="11.4953" y1="5" x2="18.8441" y2="5.41406" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B98CF2"/>
                                    <stop offset="1" stop-color="#48BBDE"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </NuxtLink>
                    <button @click="isMenuShow = !isMenuShow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="stroke-black dark:stroke-white" d="M1 1L23.5 23.5" stroke-linecap="round"/>
                            <path class="stroke-black dark:stroke-white" d="M1 23.5L23.5 0.999999" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div> 
            <NuxtLink to="/" class="w-fit relative after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-l after:from-[#B98CF2] after:to-[#48BBDE] after:transition-opacity after:opacity-0 after:duration-500 hover:after:opacity-100">
                Мои бронирования
            </NuxtLink> 
            <NuxtLink to="/" class="w-fit relative after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-l after:from-[#B98CF2] after:to-[#48BBDE] after:transition-opacity after:opacity-0 after:duration-500 hover:after:opacity-100">
                Помощь
            </NuxtLink> 
            <NuxtLink to="/" class="w-fit relative after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-l after:from-[#B98CF2] after:to-[#48BBDE] after:transition-opacity after:opacity-0 after:duration-500 hover:after:opacity-100">
                Сдать жилье
            </NuxtLink> 
        </div>
        <button @click="isMenuShow = !isMenuShow" class="ml-auto pr-[15px] sm:pr-5 lg:hidden">
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H23.5" class="stroke-white" stroke-linecap="round"/>
                <path d="M1 11H23.5" class="stroke-white" stroke-linecap="round"/>
                <path d="M1 21H23.5" class="stroke-white" stroke-linecap="round"/>
            </svg>
        </button>
        <div :class="{'hidden' : !isMenuShow}" class="w-full col-span-full fixed top-0 left-0 bg-black/60 dark:bg-black/80 h-screen z-30"></div>
    </header>
</template>

<script setup>
    import { UseDark } from '@vueuse/components'

    const height = ref()
    const block = useHeightBlock()
    onMounted(() => {
        block.headerHeight = height.value.clientHeight
        window.addEventListener("resize", () => {
            block.headerHeight = height.value.clientHeight
        })
    })
    
    const isMenuShow = ref(false)

    /* const authStore = useAuthStore()
    const logUserOut = authStore.logUserOut
    const router = useRouter()
    const logout = () => {
        logUserOut()
        isProfileDown.value = false
        router.push("/login")
    } */
</script>