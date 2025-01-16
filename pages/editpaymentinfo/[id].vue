<template>
  <section class="w-full h-full bg-gray-100">
    <div class="py-8 min-h-screen flex flex-col items-center w-full">
      <!-- Page Header -->
      <div class="w-full max-w-5xl bg-white rounded-xl shadow-md p-8 mb-8">
        <h1 class="text-3xl font-bold text-gray-800 text-center mb-2">تعديل بيانات الطالب المالية</h1>
        <p class="text-center text-gray-500 text-lg">{{ student.id }} : رقم الطالب </p>
      </div>

      <!-- Edit Form -->
      <div class="w-full max-w-5xl bg-white rounded-xl shadow-md p-8">
        <form @submit.prevent="store.updatePaymentInfo(studentId, student)">
          <!-- Form Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Field 1: طريقة الدفع -->
            <div>
              <label class="block text-lg font-medium text-gray-700 mb-2">نوع الاستلام</label>
              <select
                v-model="student.payment_type"
                class="w-full p-3 rounded-lg border border-soild border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              >
                <option selected value="دفع كامل">دفع كامل</option>
                <option value="اقساط">اقساط</option>
              </select>
            </div>

            <!-- Field 2: نسبة التخفيض -->
            <div>
              <label class="block text-lg font-medium text-gray-700 mb-2">نسبة التخفيض</label>
              <input
                type="number"
                v-model="student.discount_percentage"
                placeholder="أدخل نسبة التخفيض"
                class="w-full p-3 rounded-lg border border-soild border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            </div>

            <!-- Field 3: المبلغ الكلي -->
            <div>
              <label class="block text-lg font-medium text-gray-700 mb-2">المبلغ الكلي</label>
              <input
                type="number"
                v-model="student.total_amount"
                placeholder="المبلغ الكلي"
                class="w-full p-3 rounded-lg border border-soild border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            </div>

            <!-- Field 4: المبلغ المدفوع -->
            <div>
              <label class="block text-lg font-medium text-gray-700 mb-2">المبلغ المدفوع</label>
              <input
                type="number"
                v-model="student.amount_paid"
                placeholder="أدخل المبلغ المدفوع"
                class="w-full p-3 rounded-lg border border-soild border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            </div>

            <!-- Field 5: تاريخ الاستلام -->
            <div>
              <label class="block text-lg font-medium text-gray-700 mb-2">تاريخ الاستلام</label>
              <input
                type="date"
                v-model="student.receive_payment_date"
                class="w-full p-3 rounded-lg border border-soild border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            </div>

            <!-- Field 6: طريقة الاستلام -->
            <div>
              <label class="block text-lg font-medium text-gray-700 mb-2">طريقة الاستلام</label>
              <select
                v-model="student.payment_method"
                class="w-full p-3 rounded-lg border border-soild border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              >
                <option value="كاش">كاش</option>
                <option value="الكتروني">الكتروني</option>
              </select>
            </div>
          </div>

          <!-- Save Button -->
          <div class="mt-8">
            <button
              type="submit"
              class="w-full py-4 rounded-lg bg-indigo-500 text-white text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
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
const student = reactive({
  payment_method: "",
  amount_paid: "",
  payment_type: "",
  receive_payment_date: "",
  total_amount: "",
  discount_percentage: "",
  is_financial_information_filled: false,
});



function print() {
  window.print();
}


const fetchStudent = async (id) => {
  try {
    const data = await pb.collection("students").getOne(id);
    Object.assign(student, data); // Update the reactive `student` object
  } catch (error) {
    console.error("Error fetching student:", error);
  }
}


onMounted(() => {
  fetchStudent(studentId);
});

</script>


<style scoped>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}
</style>