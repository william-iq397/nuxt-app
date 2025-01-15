<template>
     <div class="flex flex-col gap-4 w-full h-1/2" dir="rtl">

        <div>
            <h3>معلومات الدفع</h3>
        </div>

        <div class="flex items-center gap-4 w-full my-5">
            <div class="w-2/6 h-full text-right">
                <p>اختيار طريقة الدفع</p>
                <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.payment_method">
                    <option value="اقساط">اقساط</option>
                    <option value="دفع كامل">دفع كامل</option>
                </select>
            </div>
        
            <div class="w-2/6 h-full">
                <div class="relative w-full flex flex-col">
                    <p>نسبة التخفيض</p>
                    <input type="number" id="discount_percentage" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="store.student.discount_percentage" />
                    <label for="discount_percentage" class="absolute text-right w-full text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-12 right-2 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-1/4 peer-focus:right-auto">نسبة التخفيض</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStudents } from '~/store/useStore';

const store = useStudents()
</script>