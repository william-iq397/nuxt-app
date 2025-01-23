<template>
 <div v-if="store.isLoading">
    <Skeleton/>
 </div>
 
 <div v-else class="min-h-screen w-full">
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
import Skeleton from '~/components/Skeleton.vue';
import { useStudents } from '~/store/useStore';

// TO DO
// الاعدادي بفروع العلمي والادبي
// add employee name, employment section, salary, phone number, education degree (easy)
// add to addTeacher salary => سعر المحاظرة عدد المحاظرات, الابتدائية راتب شهري, الاعدادية مقطوعة وعدد محاظرات و نسبة, المتوسطة على عدد المحاظرات (hard)
// add عدد المراحل للأستاذ => عدد الصفوف كلهن (ease)
// add الصف => الصف الاول, الصف الثاني, الصف الثالث, الصف الرابع, الصف الخامس, الصف السادس to addStudent page (easy)
// add المرحلة الدراسية => ابتدائي متوسط اعدادي (easy)
// in the manager dashboard make the manager give access to the users to the schools. by pushing the same school in the school_type (hard)
// add select input ابتدائي مختلطة, ثانوية بنين, ثانوية بنات also filter by these from the studentsTable (easy)
// make manager add these from the DB , groups, classes, schools (easy)
// print for student only, accountant only (easy)
// user can access only ابتدائي مختلطة or ثانوية بنين or ثانوية بنات make manager add these from the backend (hard)
// اضافة دفعات الطلاب للأقساط (hard)
// filter students by registered year
// fix style for students, accountant table
// validation for login, signup student, add student, add teacher,
// authorization
// add middleware
// add maximux student number to the each class, group => grades table
// activate autoImport 
// set accnntnt role, change ui stuff, remove extra code and imports and components
// upload image not working
// adjust the font size font responsive to the addstudent page
// make inputs required
// API PERFORMANCE PAGINATION, DATA COMPRESSION GZIP, DATABASE CONNECTION POOLING, CACHING REDIS, ASYNCHRONOUS LOGGING
// component to be removed StudentConfirmationButtons

const route = useRoute()
const store = useStudents()


const appConfig = useAppConfig()
const pb = usePocketbase()

onMounted(() => {
  const url = window.location.host
  if (!url.includes('localhost')) {
    pb.baseUrl = "https://" + url
  }
  store.setLoading(false)
})

const isLoginPage = route.path !== "/login"
</script>

<style>
.sidebar {
  position: fixed;
  right: 0;
}
</style>