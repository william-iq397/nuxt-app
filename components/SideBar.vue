<template>
    <div class="font-sans text-darkgray select-none w-[230px] border-l-2 border-solid border-gray-400 ">
        <div class="flex flex-col gap-2 h-screen   text-center">
            <div class="sidebar-item text-xl bg-primary border-l border-t rounded-md">
                <div class="py-2 mt-1 flex justify-start items-center flex-row-reverse rounded-lg hover:text-white hover:bg-primary gap-2">
                    <Icon name="heroicons-solid:academic-cap" class="text-white" size="24"/>
                    <h1 class="font-bold text-[15px] ml-3 text-white">TailwindCSS</h1>
                </div>
            </div>
            <NuxtLink v-for="link in links" :to="link.link">    
                <div class="sidebar-item  flex items-center flex-row-reverse hover:text-white hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer" >
                    <Icon :name="link.icon" color='white' />
                    <span class="text-[15px] ml-4 font-bold">{{ link.text }}</span>
                </div>
            </NuxtLink>
            <div @click="logout" class="sidebar-item my-2 mt-auto flex items-center flex-row-reverse hover:text-white hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer">
                <Icon name="ph:sign-out-light" color='white' />
                <span class="text-[15px] ml-4 font-bold">تسجيل الخروج</span>
            </div>

    </div>
    </div>
</template>

<script setup>
import { usePocketbase } from '~/pocketbase';
import {useRouter} from 'vue-router'
import HumbugerIcon from './HumbugerIcon.vue';

const pb = usePocketbase()
const route = useRouter()

function logout() {
    pb.authStore.clear()
    route.push('/login')
    console.log("logged out")
}

const links = [
    {
        link: "/",
        icon: "ph:squares-four" ,
        text: "الرئيسية",
    },
    {
        link: "/",
        icon: "fa6-solid:user-graduate" ,
        text: "الطلاب",
    },
    {
        link: "/",
        icon: "tabler:briefcase" ,
        text: "الاساتذة",
    },
    {
        link: "/accountant",
        icon: "mingcute:cash-fill" ,
        text: "الحسابات",
    },
    {
        link: "/addstudent",
        icon: "fluent:person-add-28-regular" ,
        text: "اضافة طالب",
    },
    {
        link: "/",
        icon: "mdi:briefcase-plus" ,
        text: "اضافة استاذ",
    },
    {
        link: "/",
        icon: "fa6-solid:user-graduate" ,
        text: "الخريجين",
    },
    {
        link: "/thesearch",
        icon: "mdi:search" ,
        text: "البحث",
    },
]
</script>

