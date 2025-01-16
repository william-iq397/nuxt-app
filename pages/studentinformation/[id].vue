<template>
    <div class="py-8 min-h-screen flex flex-col items-center w-full">
        <!-- Header Section -->
        <div class="flex flex-row-reverse justify-around w-full max-w-3xl bg-white rounded-xl shadow-md p-6">
            <div class="flex justify-between items-center">
                <!-- Student Info -->
                <div class="flex flex-col items-end">
                    <h2 class="text-2xl font-bold text-gray-800">{{ student.student_name + store.students.length }}</h2>
                    <p class="text-gray-500 text-sm" dir="rtl">رقم الطالب : {{ student.id }}</p>
                    <p class="text-gray-500 text-sm">الجنس : {{ student.gender }}</p>
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
        <div class="w-full max-w-3xl bg-white rounded-xl shadow-md " v-if="student && Object.keys(student).length > 0">
            <table class="w-full border-collapse text-right my-8">
                <tbody>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ student.student_name }}</td>
                        <td class="p-4 font-medium">الاسم الكامل</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ new Date().getFullYear() - student.student_birthdate.split('-')[0] }}</td>
                        <td class="p-4 font-medium">العمر</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 font-medium">{{ student.gender }}</td>
                        <td class="p-4 text-black font-semibold">الجنس</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.student_birthdate }}</td>
                        <td class="p-4 font-medium">تاريخ الولادة</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ student.mother_name }}</td>
                        <td class="p-4 font-medium">اسم الأم</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.blood_type }}</td>
                        <td class="p-4 font-medium">فصيلة الدم</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ student.grade }}</td>
                        <td class="p-4 font-medium">المرحلة الدراسية</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.residancy_place }}</td>
                        <td class="p-4 font-medium">مكان السكن</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ student.does_student_has_disease }}</td>
                        <td class="p-4 font-medium">لدى الطالب امراض مزمنة</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.father_name }}</td>
                        <td class="p-4 font-medium">اسم ولي امر الطالب</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ student.relative_type }}</td>
                        <td class="p-4 font-medium">صلة القرابة</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.father_profession }}</td>
                        <td class="p-4 font-medium">مهنة ولي الامر</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ student.profession_work_place }}</td>
                        <td class="p-4 font-medium">مكان عمل ولي الامر</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.father_number }}</td>
                        <td class="p-4 font-medium">رقم ولي امر الطالب</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ student.payment_method }}</td>
                        <td class="p-4 font-medium">طريقة الدفع</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.discount_percentage }}%</td>
                        <td class="p-4 font-medium">نسبة التخفيض</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{ 
                                        new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
                                            student.discount_percentage 
                                            ? (student.total_amount - (student.total_amount * (student.discount_percentage / 100))) 
                                            : student.total_amount
                                        ) 
                                        }}</td>
                        <td class="p-4 font-medium">المبلغ الكلي</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
                             student.amount_paid ? student.amount_paid : 'لا يوجد') }}</td>
                        <td class="p-4 font-medium">المبلغ المدفوع</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">{{  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
                            student.amount_paid ? (student.total_amount - (student.total_amount * (student.discount_percentage / 100))) - student.amount_paid : '1300000')}}
                        </td>
                        <td class="p-4 font-medium">المبلغ المتبقي</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-black font-semibold">{{ student.updated.split(" ")[0] }}</td>
                        <td class="p-4 font-medium">تاريخ الاستلام</td>
                    </tr>
                    <tr class="bg-[#C3C3FF]">
                        <td class="p-4 text-black font-semibold">
                            {{ student.payment_type }}
                        </td>
                        <td class="p-4 font-medium">نوع الدفع</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else>
            there are no student data
        </div>

        <!-- Footer -->

    </div>
</template>

<script setup>
import {useStudents} from '../store/useStore.js'
import { useRoute } from 'vue-router';
import { usePocketbase } from '~/pocketbase.js';

const store = useStudents()
const route = useRoute()
const studentId = route.params.id
const pb = usePocketbase() // Custom composable for PocketBase
const student = ref({})

const fetchStudent = async (id) => {
  try {
    student.value = await pb.collection('students').getOne(id);
  } catch (error) {
    console.error('Error fetching student:', error);
  }
};


function print() {
    window.print();
}

onMounted(() => {
    fetchStudent(studentId);
});
</script>