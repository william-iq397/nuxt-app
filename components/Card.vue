<template>
    <section class="flex flex-col justify-between items-between w-72 h-full bg-white border border-gray-200 rounded-lg shadow hover:cursor-pointer">
        <div class="w-52 h-52 mx-auto overflow-hidden">
            <img class="p-8 rounded-t-lg" width="200" height="200" :src="item.image" :alt="item.description">
        </div>
        <div class="flex flex-col  justify-evenly">
            <div>
                <h2 class="text-lg py-4">{{ item.title }}</h2>
            </div>
            <div class="flex justify-between">
                <h2 class="text-3xl font-bold text-gray-900 ">{{item.price}}$</h2>
                <button class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800p-2 bg-blue-800">buy</button>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['item'])



</script>