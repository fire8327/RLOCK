<template>
    <div class="flex flex-col gap-5 pt-10">
        <div class="flex md:items-end md:justify-between max-md:flex-col">
            <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Главное меню</p>
            <NuxtLink to="/" class="flex items-center w-fit py-2 px-5 gap-2.5 text-base md:text-lg xl:text-xl leading-[135.3%] border border-black rounded-full bg-[#D9D9D9]">
                <span>Добавить недвижимость</span>                
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M10.5 1V20" stroke="black" stroke-linecap="round"/>
                    <path d="M1 10.5L20 10.5" stroke="black" stroke-linecap="round"/>
                </svg>
            </NuxtLink>
            <!-- <div class="relative overflow-x-auto">
                <table class="bg-[#D9D9D9] rounded-[25px] px-12 py-8">
                    <thead>
                        
                    </thead>
                </table>
            </div> -->
        </div>
    </div>
</template>
