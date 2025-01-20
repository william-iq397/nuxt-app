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
// add sign up for the student to addStudent page
// add employee name, employment section, salary, phone number, education degree
// add to addTeacher salary => سعر المحاظرة عدد المحاظرات, الابتدائية راتب شهري, الاعدادية مقطوعة وعدد محاظرات و نسبة, المتوسطة على عدد المحاظرات
// add عدد المراحل للأستاذ => عدد الصفوف كلهن
// add الصف => الصف الاول, الصف الثاني, الصف الثالث, الصف الرابع, الصف الخامس, الصف السادس
// add المرحلة الدراسية => ابتدائي متوسط اعدادي
// add select input ابتدائي مختلطة, ثانوية بنين, ثانوية بنات also filter by these from the studentsTable
// make manager add these from the DB roles, groups, classes, schools
// print for student only, accountant only
// user can access only ابتدائي مختلطة or ثانوية بنين or ثانوية بنات make manager add these from the backend
// اضافة دفعات الطلاب
// filter students by registered year
// fix style for students, accountant table
// validation for login, signup, add student, add teacher,  
// authorization
// add middleware
// add login to students_auth
// add maximux student number to the each class, group => grades table
// activate autoImport 
// adjust print with css or tailwindcss
// set accnntnt role, change ui stuff, remove extra code and imports and components
// upload image not working
// display inputs error on the frontend or use css
// add father information headers (اختيار القرابة, حالة العمل)
// adjust the font size font responsive to the addstudent page
// make inputs required
// API PERFORMANCE PAGINATION, DATA COMPRESSION GZIP, DATABASE CONNECTION POOLING, CACHING REDIS, ASYNCHRONOUS LOGGING
// component to be removed StudentConfirmationButtons

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