<template>
    <div class="h-full w-full font-sans">
        <main class="font-sans w-full h-full flex justify-between">         
            <slot />
            <SideBar v-if="isLoginPage" />
        </main>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const isLoginPage = route.path !== "/login"


</script>

<style>
html, body, #__nuxt {
    width: 100%;
    height: 100%;
}

</style>