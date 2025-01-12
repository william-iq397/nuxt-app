<template>
    <div class="1/2 w-full flex flex-col items-center">
        <div class="w-full flex justify-end items-center gap-4 my-8 ">
            <div class="w-full flex flex-col justify-around items-center">
                <!-- FIRST LINE -->
                <div class="w-full flex justify-end items-center gap-4 my-4 ">
                    <div class="w-2/6 h-full">
                        <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>الجنس</option>
                            <option value="ذكر">ذكر</option>
                            <option value="انثى">انثى</option>
                        </select>
                    </div>
                
                    <div class="w-2/6 h-full">
                        <div class="relative w-full">
                            <input type="text" id="student_full_name" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="student_full_name" class="absolute text-right w-full text-sm text-gray-500 dark:text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-1/4 peer-focus:right-auto">اسم الطالب الرباعي</label>
                        </div>
                    </div>
                </div>

                <!-- SECOND LINE -->
                <div class="w-full flex justify-end items-center gap-4 my-4 ">
                    <div class="w-2/6 h-full">
                        <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>فصيلة الدم</option>
                            <option value="ذكر">ذكر</option>
                            <option value="انثى">انثى</option>
                        </select>
                    </div>

                    <div class="w-2/6 h-full">
                        <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>المرحلة الدراسية</option>
                            <option value="ذكر">ذكر</option>
                            <option value="انثى">انثى</option>
                        </select>
                    </div>

                    <div class="w-2/6 h-full">
                        <DatePicker/>
                    </div>
                </div>

                <!-- THREE LINE -->
                <div class="w-full flex justify-end items-center gap-4 my-4 ">
                    <div class="w-2/6 h-full">
                        <div class="relative w-full">
                            <div class="relative w-full">
                                <input type="text" id="disease_type" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="disease_type" class="absolute text-right w-full text-sm text-gray-500 dark:text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-1/4 peer-focus:right-auto">نوع المرض</label>
                            </div>
                        </div>
                    </div>

                    <div class="w-2/6 h-full">
                        <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>هل لدى الطالب امراض مزمنة</option>
                            <option value="نعم">نعم</option>
                            <option value="لا">لا</option>
                        </select>
                    </div>

                    <div class="w-2/6 h-full">
                        <div class="relative w-full">
                            <input type="text" id="residancy_place" class="text-right block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="residancy_place" class="absolute text-right w-full text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-1/4 peer-focus:right-auto">مكان السكن</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- input image field -->
            <div class="w-1/6 h-full py-8 px-4 border border-solid border-gray-400 rounded-lg flex justify-center items-center">
                <div clas="flex flex-col  border border-solid border-gray-200 rounded-lg">
                    <Icon class="text-gray-400" name="material-symbols:account-circle-outline" size="100" />
                    <h6>الصورة الشخصية</h6> 
                </div>
            </div>
        </div>

     
    </div>
</template>

<script setup>
import DatePicker from './DatePicker.vue';
const genders = ref([
         "ذكر",
         "أنثى"
])
</script>