<template>
    <div ref="sidebar" class="font-sans h-full relative transition-all">
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
            <div class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="line-md:account-small" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">الرئيسية</span>
            </div>
            <div class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="line-md:account-small" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">الطلاب</span>
            </div>
            <div class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="line-md:account-small" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">الاساتذة</span>
            </div>
            <div class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="line-md:account-small" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">الحسابات</span>
            </div>
            <div class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="line-md:account-small" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">اضافة طالب</span>
            </div>
            <div
                class="sidebar-item p-2.5 mt-3 flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="line-md:account-small" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">اضافة استاذ</span>
            </div>
            <div class="sidebar-item p-2.5 mt-auto flex items-center flex-row-reverse hover:bg-primary gap-4 rounded-md px-4 duration-300 cursor-pointer text-white">
                <Icon name="ph:sign-out-light" color='white' />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">تسجيل الخروج</span>
            </div>
        </div>

        <!-- <button @click="handleswipe" class="cursor-pointer absolute top-10 -left-10 bg-white rounded-md">
            <div class="w-4 h-1 bg-black"></div>
            <div class="w-4 h-1 bg-black"></div>
            <div class="w-4 h-1 bg-black"></div>
        </button> -->
    </div>
</template>

<script setup>
// let isSidebarExist = true; // Track if sidebar exists or is hidden
// const sidebar = ref("sidebar"); // Reference to the sidebar element

// Function to handle swipe or toggle action
// function handleswipe() {
//     if(sidebar.value) {
//         console.log(sidebar.value)
//   if (isSidebarExist) {
//     // Move sidebar off-screen and hide it
//     sidebar.value.style.transform = "translateX(100%)"; // Move sidebar off the screen
//     // sidebar.value.style.opacity = "0"; // Fade out the sidebar for smooth transition
//     isSidebarExist = false;
//   } else {
//     // Bring the sidebar back on-screen
//     sidebar.value.style.transform = "translateX(0)"; // Reset sidebar position
//     // sidebar.value.style.opacity = "1"; // Fade it back in
//     isSidebarExist = true;
//   }
// }
// }
</script>

