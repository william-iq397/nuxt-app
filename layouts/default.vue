<template>
  <div class="h-screen w-full">
      <main class="font-sans w-full h-screen flex justify-between">
          <slot />
          <div v-if="pb.authStore.isValid" id="sidebar-container" class="h-screen relative w-fit lg:w-[280px] transition-all">
              <SideBar class="sidebar"/>
          </div>
      </main>
  </div>
</template>



<script setup>
import { useRoute } from 'vue-router';
import { usePocketbase } from '~/pocketbase';

// TO DO 
// adjust print with css or tailwindcss
// hr can edit student information accountant can edit student financial information
//set accnntnt role, change ui stuff, remove extra code and imports and components
// upload image not working
// display inputs error on the frontend or use css
// fix BG color 
// add father information headers (اختيار القرابة, حالة العمل)
// adjust the font size font responsive to the addstudent page
// make inputs required

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


@media screen and (min-width: 1025px) {
  .sidebar {
  position: fixed;
  right: 0;
}}


@media screen and (max-width: 1024px) {
  .sidebar {
    position: sticky;
  }  
}
</style>