export const useUserStore  = defineStore("user", () => {
    const authenticated = useCookie('authenticated')
    const role = useCookie('role')
    const token = useCookie('token')
    const id = useCookie('id')
    authenticated.value = false

    return {authenticated, role, token, id}
})