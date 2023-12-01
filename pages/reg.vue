<template>
    <div class="w-full flex items-center justify-center h-full">
        <form class="flex flex-col items-center gap-4 w-full md:w-1/2 xl:w-1/3">
            <input v-model="user.username" type="text" class="w-full rounded-lg border border-[#6A6A6A] bg-[#D9D9D9] py-2 px-4" placeholder="Имя">
            <input v-model="user.email" type="email" class="w-full rounded-lg border border-[#6A6A6A] bg-[#D9D9D9] py-2 px-4" placeholder="Email">
            <input v-model="user.password" type="password" class="w-full rounded-lg border border-[#6A6A6A] bg-[#D9D9D9] py-2 px-4" placeholder="••••••">
            <button @click.prevent="reg" class="w-full rounded-full py-2 px-4 bg-[#D9D9D9] border border-[#000000]">Регистрация</button>
            <div class="flex items-center justify-center w-fit gap-1 dark:text-white">
                <p>Уже есть аккаунт?</p>
                <NuxtLink to="/login" class="underline underline-offset-2">Войти</NuxtLink>
            </div>
        </form>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()

    const user = ref({
        username: "",
        email: "",
        password: ""
    })

    const userStore = useUserStore()
    const router = useRouter()
    
    const reg = async () => {        
        const { data, error, pending } = await useFetch(`${config.public.APIbaseURL}/api/auth/signup`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: {
                name: user.value.username,
                email: user.value.email,
                password: user.value.password
            }
        })    
        if(data.value) {
            console.log(data.value)
            userStore.authenticated = true
            userStore.role = "user"
            userStore.token = data.value.token
            userStore.id = data.value.user._id
            router.push('/')
        }
        if(error.value) {
            console.log(error.value)
        }
    }
</script>
