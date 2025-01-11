<template>
  <div class="p-6" dir="rtl">
    <h1 class="text-xl font-bold mb-4 text-right">جدول مدفوعات الطلاب</h1>

    <!-- Filters -->
    <div class="mb-6 flex flex-col md:flex-row gap-4">
      <!-- Search -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="ابحث بالاسم"
        class="w-full md:w-1/3 h-10 p-2 border border-gray-300 rounded"
      />

      <!-- Filter by Class -->
      <select
        v-model="selectedClass"
        class="w-full md:w-1/3 h-10 p-2 border border-gray-300 rounded"
      >
        <option value="">اختر الصف</option>
        <option
          v-for="classOption in classOptions"
          :key="classOption"
          :value="classOption"
        >
          {{ classOption }}
        </option>
      </select>

      <!-- Filter by Group -->
      <select
        v-model="selectedGroup"
        class="w-full md:w-1/3 h-10 p-2 border border-gray-300 rounded"
      >
        <option value="">اختر المجموعة</option>
        <option
          v-for="groupOption in groupOptions"
          :key="groupOption"
          :value="groupOption"
        >
          {{ groupOption }}
        </option>
      </select>

      <!-- Filter Button -->
      <button
        @click="filterResults"
        class="w-full md:w-1/6 h-10 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
       بحث
      </button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="table-auto border-collapse border border-gray-300 text-sm 2xl:text-lg text-right min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border-b border-gray-300">الاسم</th>
            <th class="px-4 py-2 border-b border-gray-300">الجنس</th>
            <th class="px-4 py-2 border-b border-gray-300">الصف</th>
            <th class="px-4 py-2 border-b border-gray-300">المجموعة</th>
            <th class="px-4 py-2 border-b border-gray-300">نوع الدفع</th>
            <th class="px-4 py-2 border-b border-gray-300">المبلغ المتبقي</th>
            <th class="px-4 py-2 border-b border-gray-300">خصم</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(student, index) in filteredStudents"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="px-4 py-2 border-b border-gray-300">{{ student.name }}</td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.gender }}</td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.class }}</td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.group }}</td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.paymentType }}</td>
            <td class="px-4 py-2 border-b border-gray-300 text-red-500">
              ${{ student.remainingMoney }}
            </td>
            <td class="px-4 py-2 border-b border-gray-300">
              <span
                class="px-2 py-1 text-xs rounded-full"
                :class="student.hasDiscount ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'"
              >
                {{ student.hasDiscount ? 'نعم' : 'لا' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Student data
const students = ref([
  {
    name: "محمد علي",
    gender: "ذكر",
    class: "10-A",
    group: "علمي",
    paymentType: "دفع كامل",
    remainingMoney: 0,
    hasDiscount: true,
  },
  {
    name: "فاطمة أحمد",
    gender: "أنثى",
    class: "10-B",
    group: "أدبي",
    paymentType: "أقساط",
    remainingMoney: 200,
    hasDiscount: false,
  },
  {
    name: "عمر خالد",
    gender: "ذكر",
    class: "9-C",
    group: "تجاري",
    paymentType: "أقساط",
    remainingMoney: 150,
    hasDiscount: true,
  },
]);

// Reactive state for filters and search
const searchQuery = ref("");
const selectedClass = ref("");
const selectedGroup = ref("");
const filteredStudents = ref([]);

// Computed properties for unique class and group options
const classOptions = computed(() =>
  [...new Set(students.value.map((student) => student.class))]
);
const groupOptions = computed(() =>
  [...new Set(students.value.map((student) => student.group))]
);

// Filter students based on input criteria
const filterResults = () => {
  filteredStudents.value = students.value.filter((student) => {
    const matchesSearch =
      !searchQuery.value ||
      student.name.includes(searchQuery.value) ||
      student.gender.includes(searchQuery.value);
    const matchesClass =
      !selectedClass.value || student.class === selectedClass.value;
    const matchesGroup =
      !selectedGroup.value || student.group === selectedGroup.value;

    return matchesSearch && matchesClass && matchesGroup;
  });
};

// Populate filtered students initially
onMounted(() => {
  filteredStudents.value = students.value;
});
</script>

