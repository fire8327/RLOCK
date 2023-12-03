<template>
    <div class="w-full flex items-center justify-center h-full">
        <form class="flex flex-col gap-4 items-center w-full md:w-1/2 xl:w-1/3">
            <input v-model="user.username" type="text" class="w-full rounded-lg border border-[#6A6A6A] bg-[#D9D9D9] py-2 px-4" placeholder="Логин">
            <input v-model="user.password" type="password" class="w-full rounded-lg border border-[#6A6A6A] bg-[#D9D9D9] py-2 px-4" placeholder="••••••">
            <button @click.prevent="login" class="w-full rounded-full py-2 px-4 bg-[#D9D9D9] border border-[#000000]">Вход</button>
            <div class="flex items-center justify-center w-fit gap-1 dark:text-white">
                <p>Нет аккаунта?</p>
                <NuxtLink to="/reg" class="underline underline-offset-2">Зарегистрируйтесь</NuxtLink>
            </div>
        </form>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()

    const user = ref({
        username: "",
        password: ""
    })

    const userStore = useUserStore()
    const router = useRouter()
    
    const login = async () => {
        if(user.value && user.value.username == "admin") {
            const { data, error, pending } = await useFetch(`${config.public.APIbaseURL}/api/admin/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: {
                    login: user.value.username,
                    password: user.value.password
                }
            })    
            if(data.value) {
                console.log(data.value)
                userStore.authenticated = true
                userStore.role = "admin"
                router.push('/admin')
            }
            if(error.value) {
                console.log(error.value)
            }
        } else {
            const { data, error, pending } = await useFetch(`${config.public.APIbaseURL}/api/auth/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: {
                    email: user.value.username,
                    password: user.value.password
                }
            })    
            if(data.value) {
                console.log(data.value)
                userStore.authenticated = true
                userStore.role = "user"
                userStore.id = data.value.user._id
                userStore.token = data.value.token
                router.push('/')
            }
            if(error.value) {
                console.log(error.value)
            }
        }
    }
</script>
