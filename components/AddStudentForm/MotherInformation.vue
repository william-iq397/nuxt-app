<template>
    <div class="flex flex-col gap-4 w-full h-1/2" dir="rtl">
        <div>
            <h4>معلومات ام الطالب</h4>
        </div>

        <div class="flex gap-4 w-full">
            <div class="w-2/6 h-full">
                <div class=" w-full">
                    <p for="mother_name" class="px-2text-right w-full duration-300 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-1/4 peer-focus:right-auto">اسم الام الثلاثي</p>
                    <input type="text" id="mother_name" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.mother_name" />
                </div>
            </div>
            
            <div class="w-2/6 h-full">
                <div class="w-full">
                    <p for="mother_profission" class="px-2 text-right w-full peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-1/4 peer-focus:right-auto">مهنة الام</p>
                    <input type="text" id="mother_profission" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.mother_profession" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStudents } from '~/store/useStore';

const store = useStudents()
</script>