<template>
    <div class="flex gap-8">
        <input type="number" v-model.lazy="foodStore.quantity"  class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50">
        <input type="text" v-model.lazy="foodStore.orderTitle"  class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
</template>

<script setup lang="ts">
import { useFood } from '~/store/foodStore';
const foodStore = useFood()
</script>
