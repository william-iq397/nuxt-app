<template>
    <header class="py-4 max-w-7xl mx-auto">
        <nav class="flex items-center gap-4">
            <h1 class="text-3xl font-black">CLOTHO POS</h1>
                <input v-model="foodStore.inputValue" type="search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="search for plate" />
        </nav>
    </header>
</template>
  
<script setup lang="ts">
import { useFood } from '../store/foodStore';

const foodStore = useFood();
</script>
  