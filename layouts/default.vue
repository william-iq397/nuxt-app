<template>
  <div class="min-h-screen w-full">
      <main class="font-sans w-full min-h-screen flex justify-between">
          <slot />
          <div v-if="pb.authStore.isValid" id="sidebar-container" class="h-screen relative w-[70px] lg:w-[280px] transition-all">
              <SideBar class="sidebar"/>
          </div>
      </main>
  </div>
</template>



<script setup>
import { useRoute } from 'vue-router';
import { usePocketbase } from '~/pocketbase';

// TO DO 
// add phone number to the addStudent to register with the app
// add registary year to the addstudent page 
// create table named academic_year, create another field for student with academic year
// add academic_year to know the student academic year 
// add maximux student number to the each class
// activate autoImport 
// adjust print with css or tailwindcss
// set accnntnt role, change ui stuff, remove extra code and imports and components
// upload image not working
// display inputs error on the frontend or use css
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
.sidebar {
  position: fixed;
  right: 0;
}
</style>