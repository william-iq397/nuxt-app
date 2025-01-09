<template>
    <div class="flex justify-center items-center w-full h-full relative">
        <!-- two colors in the background purple and white -->
        <div class="h-full w-1/2 bg-primary "></div>
        <div class="h-full w-1/2 bg-offwhite "></div>

        <div class="w-3/4 flex bg-transparent backdrop-blur-[20px] rounded-xl p-10 mx-auto absolute z-10 border border-solid border-white ">
            <!-- logo images left side -->
            <div class="flex flex-col items-center w-3/4">
                <img src="../Images/education.svg" alt="educatoin logo" class="w-1/2 h-full">
                <img src="../Images/label.svg" alt="educatoin logo" class="w-1/2 h-full">
            </div>
            <!-- form right side -->
            <form class="flex flex-col justify-between items-center space-y-8 w-3/4">
                <h1 class=" my-2">تسجيل الدخول</h1>
                <p class=" text-right my-2 w-5/6">يجيب ان يكون لك اسم مستخدم و كلمة مرور حتى تستطيع تسجيل الدخول</p>
                <div class="flex flex-col space-y-4 my-2">
                <!-- Email Input -->
                    <input v-model="useremail" type="email" placeholder="Email" class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                <!-- Password Input -->
                    <input v-model="password" type="password" placeholder="Password"  class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    <label for="checkbox" class="flex flex-row-reverse justify-between select-none">حفظ المعلومات <input id="checkbox" type="checkbox"></label>
                    <button @click="login" class="bg-primary w-full h-8 text-white rounded-lg">تسجيل الدخول</button>
                </div>
            </form>
             {{ isUserLoginIn}}

        </div>

    </div>
</template>

<script setup>
import pb from '~/pocketbase';
import { useRouter } from 'vue-router';


const route = useRouter()
const useremail = ref('');
const password = ref('');

// const { setColorMode } = useColorMode()
// console.log(setColorMode)
// function changeColorMode() {
//   setColorMode('dark') // or 'light'
// }

// const colorMode = useColorMode()
// const isDark = computed({
//     get() {
//         return colorMode.value === 'dark'
//     },
//     set() {
//         colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
//     }
// })

// Reactive computed property for auth state
const isUserLoginIn = computed(() => pb.authStore.isValid);

function logout() {
    pb.authStore.clear();
    route.push('/')
}


async function login() {
    try {
        const authData = await pb.collection('users').authWithPassword(
            useremail.value,
            password.value
        );
        route.push('/')

        console.log('Login successful:', authData);
    } catch (e) {
        console.error('Login failed:', e);
    }

    useremail.value = ""
    password.value = ""
}


</script>
