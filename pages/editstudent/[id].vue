<template>
    <section class="w-full h-full">
        <div class="py-8 min-h-screen flex flex-col items-center w-full">
    <!-- Page Header -->
    <div class="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 mb-6">
      <h1 class="text-2xl font-bold text-gray-800 text-center">Edit Student Payment Information</h1>
      <p class="text-center text-gray-500 text-sm">
        Student ID: {{ student.id }}
      </p>
    </div>

    <!-- Edit Form -->
    <div class="w-full max-w-3xl bg-white rounded-xl shadow-md p-6">
      <form @submit.prevent="store.updatePaymentInfo(studentId)">
        <!-- Field 1: طريقة الدفع -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">نوع الاستلام</label>
          <select
            v-model="store.student.payment_type"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="دفع كامل">دفع كامل</option>
            <option value="اقساط">اقساط</option>
          </select>
        </div>

        <!-- Field 2: نسبة التخفيض -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">نسبة التخفيض</label>
          <input
            type="number"
            v-model="store.student.discount_percentage"
            placeholder="أدخل نسبة التخفيض"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Field 3: المبلغ الكلي -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">المبلغ الكلي</label>
          <input
            type="number"
            v-model="store.student.total_amount"
            placeholder="المبلغ الكلي"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Field 4: المبلغ المدفوع -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">المبلغ المدفوع</label>
          <input
            type="number"
            v-model="store.student.amount_paid"
            placeholder="أدخل المبلغ المدفوع"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Field 5: تاريخ الاستلام -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">تاريخ الاستلام</label>
          <input
            type="date"
            v-model="store.student.receive_payment_date"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Field 6: طريقة الاستلام -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">طريقة الاستلام</label>
          <select
            v-model="store.student.payment_method"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="كاش">كاش</option>
            <option value="الكتروني">الكتروني</option>
          </select>
        </div>

        <!-- Save Button -->
        <div class="mt-6">
          <button
            type="submit"
            class="w-full bg-indigo-500 text-white py-3 rounded-lg shadow hover:bg-indigo-600 transition"
          >
            حفظ المعلومات
          </button>
        </div>
      </form>
    </div>
  </div>
    </section>
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