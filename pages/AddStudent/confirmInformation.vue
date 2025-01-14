<template>
    <div class="py-8 min-h-screen flex flex-col items-center w-full">
        <!-- Header Section -->
        <div class="flex flex-row-reverse justify-around w-full max-w-3xl bg-white rounded-xl shadow-md p-6">
            <div class="flex justify-between items-center">
                <!-- Student Info -->
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">جدر حبيب حميد</h2>
                    <p class="text-gray-500 text-sm">رقم الطالب: 88294829</p>
                    <p class="text-gray-500 text-sm">الجنس: ذكر</p>
                </div>
                <!-- Profile Picture -->
                <div class="w-20 h-20 rounded-full  flex items-center justify-center">
                    <Icon name="material-symbols-light:account-circle-outline" size="80" class="w-full h-full text-gray-500"/>
                </div>
            </div>

            <div class="w-1/3 mt-4" @click="print">
                <button class="w-full bg-indigo-500 text-white py-3 rounded-lg shadow hover:bg-indigo-600 transition">
                    طباعة المعلومات
                </button>
            </div>
        </div>

        <!-- Information Table -->
        <div class="w-full max-w-3xl bg-white rounded-xl shadow-md my-6">
            <table class="w-full border-collapse text-right">
                <tbody>
                    <tr class="bg-indigo-100">
                        <td class="p-4 text-gray-700">جدر حبيب حميد إبراهيم</td>
                        <td class="p-4 font-medium">الاسم الكامل</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-gray-700">20</td>
                        <td class="p-4 font-medium">العمر</td>
                    </tr>
                    <tr class="bg-indigo-100">
                        <td class="p-4 text-gray-700">ذكر</td>
                        <td class="p-4 font-medium">الجنس</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-gray-700">25/9/2003</td>
                        <td class="p-4 font-medium">تاريخ الولادة</td>
                    </tr>
                    <tr class="bg-indigo-100">
                        <td class="p-4 text-gray-700">اسم الأم الثالثي</td>
                        <td class="p-4 font-medium">اسم الأم</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-gray-700">O+</td>
                        <td class="p-4 font-medium">زمرة الدم</td>
                    </tr>
                    <tr class="bg-indigo-100">
                        <td class="p-4 text-gray-700">الأخير علي</td>
                        <td class="p-4 font-medium">المرحلة الدراسية</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-gray-700">البصرة - الجيز</td>
                        <td class="p-4 font-medium">مكان السكن</td>
                    </tr>
                    <tr class="bg-indigo-100">
                        <td class="p-4 text-gray-700">لا</td>
                        <td class="p-4 font-medium">لديه أقساط متبقية؟</td>
                    </tr>
                    <!-- Add more rows as needed -->
                </tbody>
            </table>
        </div>

        <!-- Footer -->

        <div class="w-full">
            <StudentConfirmationButtons :onSave="store.addStudent" :onCancel="toAddStudentPage" saveLabel="ارسال المعلومات" cancelLabel="الغاء"  />
        </div>
    </div>
</template>

<script setup>
import StudentConfirmationButtons from '~/components/AddStudentForm/StudentConfirmationButtons.vue';
import {useStudents} from '../store/useStore.js'

const store = useStudents() 

const addStudent = store.addStudent()

function toAddStudentPage() {
    navigateTo('/addstudent')
}

const student = [
    {
    name: 'اسم الطالب',
    gender: 'ذكر',
    },
    {
    name: 'ali',
    gender: 'female'
    },
    {
    name: 'ali',
    gender: 'female'
    },
    {
    name: 'ali',
    gender: 'female'
    },
    {
    name: 'ali',
    gender: 'female'
    },
    {
    name: 'ali',
    gender: 'female'
    },
    {
        name: 'mohamed',
        gender: 'male'
    },
    {
        name: 'mohamed',
        gender: 'male'
    }
]

function print() {
    window.print();
}
</script>