export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    const authenticated = useCookie("authenticated")

    if(authenticated.value) {
        userStore.authenticated = true
    }

    if (authenticated.value && to?.name === 'login') {
        return navigateTo('/')
    }
})