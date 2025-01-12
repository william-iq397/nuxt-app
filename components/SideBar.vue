<template>
    <div class="font-sans text-darkgray select-none">
        <div class="flex flex-col h-full p-2 w-[250px] text-center">
            <div class="sidebar-item text-xl">
                <div class="p-2.5 mt-1 flex items-center flex-row-reverse rounded-lg hover:text-white hover:bg-primary gap-4">
                    <Icon name="heroicons-solid:academic-cap" size="24"/>
                    <h1 class="font-bold text-[15px] ml-3">TailwindCSS</h1>
                </div>
                <div class="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div class="sidebar-item p-2.5 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                <Icon name="oui:search" size="24" color="white"/>
                <input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
            </div>
            <NuxtLink v-for="link in links" :to="link.link">    
                <div class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:text-white hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer" >
                    <Icon :name="link.icon" color='white' />
                    <span class="text-[15px] ml-4 font-bold">{{ link.text }}</span>
                </div>
            </NuxtLink>
            <div @click="logout" class="sidebar-item p-2.5 mt-auto flex items-center flex-row-reverse hover:text-white hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer">
                <Icon name="ph:sign-out-light" color='white' />
                <span class="text-[15px] ml-4 font-bold">تسجيل الخروج</span>
            </div>

        <!-- <button @click="handleswipe" class="flex flex-col gap-1 cursor-pointer absolute top-10 -left-10 bg-white rounded-md">
            <div class="w-4 h-1 bg-black"></div>
            <div class="w-4 h-1 bg-black"></div>
            <div class="w-4 h-1 bg-black"></div>
        </button> -->
    </div>
    </div>
</template>

<script setup>
import { usePocketbase } from '~/pocketbase';
import {useRouter} from 'vue-router'

const pb = usePocketbase()
const route = useRouter()

function logout() {
    pb.authStore.clear()
    route.push('/')
    console.log("logged out")
}

const links = [
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "الصفحة الرئيسية",
    },
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "الطلاب",
    },
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "الاساتذة",
    },
    {
        link: "/accountant",
        icon: "material-symbols:person-rounded" ,
        text: "الحسابات",
    },
    {
        link: "/addstudent",
        icon: "material-symbols:person-rounded" ,
        text: "اضافة طالب",
    },
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "اضافة استاذ",
    },
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "الخريجين",
    },
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "البحث",
    },
]
</script>

