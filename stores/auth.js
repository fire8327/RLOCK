export const useAuthStore  = defineStore("auth", () => {
    const authenticated = false
    const loading = false
    
    async function authenticateUser({login, password}) {
        const { data, pending } = await useFetch("https://seahorse-app-2brlp.ondigitalocean.app/api/admin/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: {
                login,
                password
            }
        })
        this.loading = pending

        if(data.value) {
            /* const token = useCookie('token')
            token.value = data?.value?.token */
            this.authenticated = true
            console.log(data.value)
        }
    }

    function logUserOut() {
        /* const token = useCookie('token')
        token.value = null */
        this.authenticated = false
    }

    return {authenticated, loading, authenticateUser, logUserOut}
})