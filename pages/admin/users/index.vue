<template>
    <div class="flex flex-col gap-5 my-10 max-lg:hidden">
        <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Пользователи</p>
        <div class="flex flex-col gap-5 rounded-[25px] bg-[#D9D9D9] px-12 py-7 text-xl font-light text-left">
            <div class="col-span-full grid grid-cols-3 gap-x-24 pb-4 border-b border-black">
                <p>Имя</p>
                <p>Почта</p>
                <p>Дата регистрации</p>
            </div>
            <div class="col-span-full grid grid-cols-3 gap-x-24" v-for="user in users">
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
                <p>{{ new Date(user.createdAt).toLocaleString('ru-RU')}}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-5 rounded-[25px] bg-[#D9D9D9] p-6 lg:hidden my-10">
        <div class="flex flex-col gap-2.5 w-full">
            <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Пользователи</p>
            <div class="w-full bg-black h-px"></div>
            <div class="grid grid-cols-1 gap-12">
                <div class="flex flex-col gap-4 text-xl font-light" v-for="user in users">
                    <p>{{ user.name }}</p>
                    <p>{{ user.email }}</p>
                    <p>{{ new Date(user.createdAt).toLocaleString('ru-RU')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    const { data: users, error: errorUsers } = await useFetch(`${config.public.APIbaseURL}/api/admin/getAllUsers`)  
</script>
