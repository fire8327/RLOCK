export const useAuthStore  = defineStore("auth", () => {
    const authenticated = false
    const loading = false
    
    async function authenticateUser({username, password}) {
        const { data, pending } = await useFetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: {
                username,
                password
            }
        })
        this.loading = pending

        if(data.value) {
            const token = useCookie('token')
            token.value = data?.value?.token
            this.authenticated = true
        }
    }

    function logUserOut() {
        const token = useCookie('token')
        this.authenticated = false
        token.value = null
    }

    return {authenticated, loading, authenticateUser, logUserOut}
})