<template>
  <div class="rounded-lg shadow-md p-6 text-md xl:text-lg 2xl:text-2xl" dir="rtl">
    <h1 class="text-md xl:text-lg 2xl:text-2xl font-bold mb-4 text-right">جدول مدفوعات الطلاب</h1>

    <!-- Filters -->
    <div class="mb-6 flex flex-col md:flex-row gap-4">
      <!-- Search -->
      <input type="text" v-model="searchQuery" placeholder="ابحث بالاسم"
        class="w-1/3 py-2 px-4 text-md xl:text-lg 2xl:text-2xl rounded-lg bg-white border border-gray-300 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

      <!-- Filter by Class -->

      <select v-model="selectedClass"
        class="text-md xl:text-lg 2xl:text-2xl w-32 py-2 px-4 rounded-lg  border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option value="">المرحلة</option>
        <option v-for="classOption in classOptions" :key="classOption" :value="classOption">
          {{ classOption }}
        </option>
      </select>

      <!-- Filter by Group -->
        <select class="text-md xl:text-lg 2xl:text-2xl w-38 py-2 px-4 rounded-lg  border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" v-model="selectedGroup">
          <option value="">اختر المجموعة</option>
          <option v-for="groupOption in groupOptions" :key="groupOption" :value="groupOption">
            {{ groupOption }}
          </option>
        </select>


      <!-- Filter Button -->
      <button @click="filterResults"
        class="py-2 px-6 rounded-lg bg-blue-500 text-white bg-primary text-md xl:text-lg 2xl:text-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
        بحث
      </button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table
        class="table-auto border-collapse border border-gray-300 text-md xl:text-lg 2xl:text-2xl text-right min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border-b border-gray-300">الاسم</th>
            <th class="px-4 py-2 border-b border-gray-300">الجنس</th>
            <th class="px-4 py-2 border-b border-gray-300">الصف</th>
            <th class="px-4 py-2 border-b border-gray-300">الشعبة</th>
            <th class="px-4 py-2 border-b border-gray-300">نوع الدفع</th>
            <th class="px-4 py-2 border-b border-gray-300">المبلغ المتبقي</th>
            <th class="px-4 py-2 border-b border-gray-300">خصم</th>
            <th class="px-4 py-2 border-b border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in filteredStudents" :key="index" class="hover:bg-gray-50">
            <td class="px-4 py-2 border-b border-gray-300 flex items-center gap-2">
              <Icon name="material-symbols:account-circle-outline" color="black" /> {{ student.name }}
            </td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.gender }}</td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.class }}</td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.group }}</td>
            <td class="px-4 py-2 border-b border-gray-300">{{ student.paymentType }}</td>
            <td class="px-4 py-2 border-b border-gray-300 text-red-500">
              ${{ student.remainingMoney }}
            </td>
            <td class="px-4 py-2 border-b border-gray-300">
              <span class="px-2 py-1 text-xs rounded-full"
                :class="student.hasDiscount ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">
                {{ student.hasDiscount ? 'نعم' : 'لا' }}
              </span>
            </td>
            <td class="px-4 py-2 border-b border-gray-300">
              <Icon name="tabler:settings" color="black" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

// Student data
const students = ref([
  {
    name: "محمد علي",
    gender: "ذكر",
    class: "سادس اعدادي",
    group: "A",
    paymentType: "دفع كامل",
    remainingMoney: 0,
    hasDiscount: true,
  },
  {
    name: "فاطمة أحمد",
    gender: "أنثى",
    class: "ثالث متوسط",
    group: "B",
    paymentType: "أقساط",
    remainingMoney: 200,
    hasDiscount: false,
  },
  {
    name: "عمر خالد",
    gender: "ذكر",
    class: "سادس ابتدائي",
    group: "C",
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
