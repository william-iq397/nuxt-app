<template>
    <section class="flex flex-col justify-between items-between w-72 h-full bg-white border border-gray-200 rounded-lg shadow hover:cursor-pointer">
        <div class="w-52 h-52 mx-auto overflow-hidden">
            <img class="p-8 rounded-t-lg" width="200" height="200" :src="item.image" :alt="item.description">
        </div>
        <div class="flex flex-col  justify-evenly items-center">
            <div>
                <h2 class="text-lg py-4">{{ item.title.split(" ")[0] + " " + item.title.split(" ")[1] }}</h2>
            </div>
            <div class="flex justify-between">
                <h2 class="text-3xl font-bold text-gray-900 ">{{item.price}}$</h2>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['item'])


</script>