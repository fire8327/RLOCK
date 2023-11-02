<template>
    <div class="w-full flex items-center justify-center h-full">
        <form class="flex flex-col gap-4 w-full md:w-1/2 xl:w-1/3">
            <input v-model="user.username" type="text" class="w-full rounded-lg border border-[#6A6A6A] bg-[#D9D9D9] py-2 px-4" placeholder="Логин">
            <input v-model="user.password" type="password" class="w-full rounded-lg border border-[#6A6A6A] bg-[#D9D9D9] py-2 px-4" placeholder="••••••">
            <button @click.prevent="login" class="w-full rounded-full py-2 px-4 bg-[#D9D9D9] border border-[#000000]">Вход</button>
        </form>
    </div>
</template>

<script setup>
    const authStore = useAuthStore()
    const authenticateUser = authStore.authenticateUser

    const user = ref({
        username: "kminchelle",
        password: "0lelplR"
    })
    const router = useRouter()    
    
    const login = async () => {
        await authenticateUser(user.value)
        if (authStore.authenticated) {
            router.push('/')
        }
    }
</script>
