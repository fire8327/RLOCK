export const useUserStore  = defineStore("user", () => {
    const authenticated = useCookie('authenticated')
    const role = useCookie('role')
    const token = useCookie('token')
    authenticated.value = false

    /* function logUserOut() {
        const token = useCookie('token')
        token.value = null
        this.authenticated = false
    } */

    return {authenticated, role, token}
})