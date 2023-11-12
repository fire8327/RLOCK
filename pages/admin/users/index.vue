<template>
    <div class="flex flex-col gap-5 py-10">
        <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Пользователи</p>
        <div class="flex flex-col gap-5 rounded-[25px] bg-[#D9D9D9] px-12 py-7">
            <div class="col-span-full grid grid-cols-4 gap-x-24 pb-4 border-b border-black">
                <p>Имя</p>
                <p>Почта</p>
                <p>Телефон</p>
                <p>Дата регистрации</p>
            </div>
            <div class="col-span-full grid grid-cols-4 gap-x-24" v-for="user in users">
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
                <p>Телефон</p>
                <p>{{ new Date(user.createdAt).toLocaleString('ru-RU')}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    const { data: users, error: errorUsers } = await useFetch(`${config.public.APIbaseURL}/api/admin/getAllUsers`)  
</script>
