<template>
    <div class="flex items-center gap-5">
        <button class="relative flex items-center justify-center w-20 h-20 group" :class="prev">
            <span class="bg-[#3E3E3E] w-full h-full flex items-center justify-center z-[1] rounded-[10px] transition-shadow duration-500 group-focus:shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)_inset] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="16" viewBox="0 0 44 16" fill="none">
                    <path d="M43 9C43.5523 9 44 8.55228 44 8C44 7.44772 43.5523 7 43 7L43 9ZM0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM43 7L1 7L1 9L43 9L43 7Z" fill="white"/>
                </svg>
            </span>
            <span class="opacity-0 duration-500 transition-all group-hover:opacity-100 w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-[10px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></span>
        </button>
        <button class="relative flex items-center justify-center w-20 h-20 group" :class="next">
            <span class="bg-[#3E3E3E] w-full h-full flex items-center justify-center z-[1] rounded-[10px] transition-shadow duration-500 group-focus:shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)_inset] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="16" viewBox="0 0 44 16" fill="none">
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM43.7071 8.70711C44.0976 8.31658 44.0976 7.68342 43.7071 7.29289L37.3431 0.928932C36.9526 0.538408 36.3195 0.538408 35.9289 0.928932C35.5384 1.31946 35.5384 1.95262 35.9289 2.34315L41.5858 8L35.9289 13.6569C35.5384 14.0474 35.5384 14.6805 35.9289 15.0711C36.3195 15.4616 36.9526 15.4616 37.3431 15.0711L43.7071 8.70711ZM1 9H43V7H1V9Z" fill="white"/>
                </svg>
            </span>
            <span class="opacity-0 duration-500 transition-all group-hover:opacity-100 w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-[10px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></span>
        </button>
    </div>
</template>

<script setup>
    defineProps({
        prev: String,
        next: String
    })
</script>