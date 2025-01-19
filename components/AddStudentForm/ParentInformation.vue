<template>
    <div class="flex flex-col gap-8 w-full h-5/6 my-8" dir="rtl">
        <div>
            <h4>معلومات ولي امر الطالب</h4>
        </div>

        <div class="flex gap-4 w-full">
            <div class="w-2/6 h-full">
                <p>اختيار القرابة</p>
                <select required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.relative_type" placeholder=" " >
                    <option selected>اختيار القرابة</option>
                    <option value="الاب">الاب</option>
                    <option value="الام">الام</option>
                </select>
            </div>
        
            <div class="w-2/6 h-full">
                <p>حالة عمل ولي الامر</p>
                <select required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.father_work_condition" placeholder=" " >
                    <option selected>اختيار الحالة</option>
                    <option value="كاسب">كاسب</option>
                    <option value="موظف">موظف</option>
                </select>
            </div>
        </div>

        <div class="flex gap-4 w-full">
            <div class="w-2/6 h-full">
                <div class="relative w-full">
                    <p>اسم ولي امر الطالب الرباعي</p>
                    <input required type="text" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.father_name" placeholder=" "  />
                </div>
            </div>

            <div class="w-2/6 h-full">
                <div class="relative w-full">
                    <p>مهنة ولي الامر</p>
                    <input required type="text" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.father_profession"  placeholder=" " />
                </div>
            </div>

            <div class="w-2/6 h-full">
                <div class="relative w-full">
                    <p>مكان عمل ولي الامر</p>
                    <input required type="text" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.profession_work_place" placeholder=" "  />
                </div>
            </div>

            <div class="w-2/6 h-full">
                <div class="relative w-full">
                    <p>رقم هاتف ولي الامر</p>
                    <input required type="number" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.father_number" placeholder=" " />
                </div>
            </div>
        </div>

        <div class="flex gap-4 w-full">
            <div class="w-2/6 h-full">
                <div class="relative w-full">
                    <p>الملاحظات</p>
                    <textarea required v-model="store.student.note" id="note" class="resize-none text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStudents } from '~/store/useStore';

const store = useStudents()
</script>