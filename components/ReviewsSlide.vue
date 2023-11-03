<template>
    <div class="flex flex-col gap-4 md:gap-6 xl:gap-[30px] bg-[#3E3E3E] rounded-[35px] p-5 md:p-7 xl:p-10 text-white h-full justify-between">
        <div class="flex items-center gap-2.5 flex-wrap w-full">
            <p class="rounded-full leading-[135.3%] py-1 px-[30px] bg-white/30 border-2 border-white" v-for="advantage in props.advantages">{{ advantage }}</p>
        </div>
        <div class="flex flex-col gap-5">
            <p class="text-[32px] leading-[151.8%] uppercase">{{ props.title }}</p>
            <div class="flex max-md:flex-col lg:items-center gap-4 justify-between">
                <p class="text-lg leading-[173.3%] max-w-[57%]">{{ props.text }}</p>
                <p class="text-center text-xl leading-[135.3%] px-6 py-4 bg-gradient-to-l from-[#B98CF2] to-[#48BBDE] rounded-[15px]">{{ props.user.name }} <br> {{ props.user.location }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        advantages: Array,
        title: String,
        text: String,
        user: {
            name: String,
            location: String
        }
    })
</script>