<template>
  <div class="relative w-full h-full">
    <input type="date" id="date" v-model="store.student.student_birthdate" required class="block w-full px-4 py-3 mt-1 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400" />
  </div>
</template>

<script setup>
import { useStudents } from '~/store/useStore';

const store = useStudents()
</script>
