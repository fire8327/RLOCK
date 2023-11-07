export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    const authenticated = useCookie("authenticated")
    const role = useCookie("role")

    if(authenticated.value) {
        userStore.authenticated = true
    }

    if (authenticated.value && to?.path === '/login') {
        return navigateTo('/')
    }

    /* if(role.value!='admin' && (to?.path === '/admin' || to?.path === '/admin/users')) {
        return navigateTo('/')
    } */
})