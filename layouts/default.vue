<template>
  <div class="h-screen w-full">
      <main class="font-sans w-full h-screen flex justify-between">
          <slot />
          <div v-if="pb.authStore.isValid" id="sidebar-container" class="h-screen relative w-[300px] transition-all">
              <SideBar class="sidebar"/>
          </div>
      </main>
  </div>
</template>



<script setup>
import { useRoute } from 'vue-router';
import { usePocketbase } from '~/pocketbase';

// TO DO 
// update the total number after discount the equation is => total - (total * discount / 100)
// fix => first page send information, second page print, save to student_accountant_request
// upload image not working
// display inputs error on the frontend or use css
// fix BG color 
// add father information headers (اختيار القرابة, حالة العمل)
// calculate student age by (currentYear - birthyear) 
// adjust the font size font responsive to the addstudent page
// make inputs required
// make the create() in the useStore file

// 
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