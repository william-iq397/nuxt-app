import { usePocketbase } from "~/pocketbase";

export default defineNuxtRouteMiddleware((to, from) => {
    const pb = usePocketbase();

    if (!pb.authStore.isValid) {
        return navigateTo('/login'); // Redirect to login if not authenticated
    }
});