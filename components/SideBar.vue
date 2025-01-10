<template>
    <div class="font-sans h-screen">
        <div class="flex flex-col h-full p-2 w-[300px]  text-center bg-gray-900">
            <div class="sidebar-item text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center flex-row-reverse hover:bg-primary gap-4">
                    <Icon name="heroicons-solid:academic-cap" size="24"/>
                    <h1 class="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
                </div>
                <div class="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div class="sidebar-item p-2.5 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                <Icon name="oui:search" size="24" color="white"/>
                <input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
            </div>
            <div v-for="link in links" class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white" >
                <Icon :name="link.icon" color='white' />
                <NuxtLink :to="link.link"><span class="text-[15px] ml-4 text-gray-200 font-bold">{{ link.text }}</span></NuxtLink>
            </div>
            <div class="sidebar-item p-2.5 mt-auto flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="ph:sign-out-light" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">تسجيل الخروج</span>
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
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "الحسابات",
    },
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "اضافة طالب",
    },
    {
        link: "/",
        icon: "material-symbols:person-rounded" ,
        text: "اضافة استاذ",
    },
]
</script>

