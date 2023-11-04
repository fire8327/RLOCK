export const useUserStore  = defineStore("user", () => {
    const authenticated = useCookie('authenticated')
    authenticated.value = false
    const role = ""

    /* function logUserOut() {
        const token = useCookie('token')
        token.value = null
        this.authenticated = false
    } */

    return {authenticated, role}
})