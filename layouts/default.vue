<template>
  <div class="h-full w-full">
      <main class="font-sans w-full h-full flex justify-between relative">
         <div id="linear-bg"></div>
          <slot />
          <div id="sidebar-container" class="h-screen relative w-[300px] transition-all">
              <SideBar v-if="isLoginPage" class="sidebar"/>
          </div>
      </main>
  </div>
</template>



<script setup>
import { useRoute } from 'vue-router';
import { usePocketbase } from '~/pocketbase';

const route = useRoute()


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
    height: 100vh;
}


.sidebar {
  position: fixed;
  right: 0;
}
</style>