<template>
    <div class="flex justify-evenly my-12 py-12">
        <button class="w-1/3 px-6 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-100">إلغاء</button>
        <button @click="addStudent" class="w-1/3 px-6 py-2 text-white bg-primary rounded-lg hover:bg-blue-700">حفظ المعلومات</button>
    </div>
</template>

<script setup>
import { useStudents } from '~/store/useStore';

const store = useStudents()


function addStudent() {
  store.addStudent()
}

</script>