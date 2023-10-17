<template>
    <div class="flex flex-col gap-7">
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
                    <input type="text" class="px-6 pt-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Куда едем?">
                    <div class="flex items-center bg-[#EBEBEB] dark:bg-transparent rounded-[15px] border border-[#B1B1B1] relative py-4">
                        <input type="date" class="w-1/2 px-6 bg-[#EBEBEB] rounded-l-[15px]">
                        <input type="date" class="w-1/2 px-6 bg-[#EBEBEB] rounded-r-[15px]">
                        <div class="absolute w-px h-full top-0 left-1/2 bg-[#B1B1B1]"></div>
                    </div>
                    <input type="text" class="px-6 pt-4 rounded-[15px] border border-[#B1B1B1] bg-[#EBEBEB] dark:bg-transparent placeholder-[#B1B1B1]" placeholder="Гости, номера">
                    <button class="py-[14px] text-center text-white rounded-[15px] bg-gradient-to-l from-[#B98CF2] to-[#40BDDB] text-2xl">Найти</button>
                </div>
            </div>
        </div>        
    </div>
</template>

<script setup>

</script>
