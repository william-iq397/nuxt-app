<template>
    <div class="h-full w-full font-sans">
        <main class="font-sans w-full h-full flex justify-between">
            <slot />
            <SideBar v-if="isLoginPage" class="sticky top-0 min-h-screen" />
        </main>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router';
import { usePocketbase } from '~/pocketbase';
import { useStudents } from '~/store/useStore';

const route = useRoute()
const store = useStudents()


const appConfig = useAppConfig()
const pb = usePocketbase()
onMounted(() => {
  const url = window.location.host
  if (!url.includes('localhost')) {
    pb.baseUrl = "https://" + url
  }
})

const isLoginPage = route.path !== "/login"


</script>

<style>
html,
body,
#__nuxt {
    width: 100%;
    height: 100%;
}
</style>