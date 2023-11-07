export const useUserStore  = defineStore("user", () => {
    const authenticated = useCookie('authenticated')
    const role = useCookie('role')
    authenticated.value = false
    role.value = ""

    /* function logUserOut() {
        const token = useCookie('token')
        token.value = null
        this.authenticated = false
    } */

    return {authenticated, role}
})