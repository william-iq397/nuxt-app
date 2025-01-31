<template>
    <div class="rounded-lg shadow-md p-6 text-md xl:text-lg 2xl:text-2xl" dir="rtl">
        <h1 class="text-md xl:text-lg 2xl:text-2xl font-bold mb-4 text-right">صفحة الطلاب</h1>

        <!-- Filters -->
        <div class="mb-6 flex flex-col md:flex-row gap-4">
            <!-- Search -->
            <input type="text" v-model="searchQuery" placeholder="ابحث بالاسم"
                class="w-1/3 py-2 px-4 text-md xl:text-lg 2xl:text-2xl rounded-lg bg-white border border-gray-300 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

            <!-- Filter by Class -->

            <select v-model="selectedClass"
                class="text-md xl:text-lg 2xl:text-2xl w-38 py-2 px-4 rounded-lg  border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">المرحلة</option>
                <option v-for="classOption in gradeOptions" :key="classOption" :value="classOption">
                    {{ classOption }}
                </option>
            </select>

            <!-- Filter by Group -->
            <select
                class="text-md xl:text-lg 2xl:text-2xl w-38 py-2 px-4 rounded-lg  border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                v-model="selectedGroup">
                <option value="">اختر الشعبة</option>
                <option v-for="groupOption in groupOptions" :key="groupOption" :value="groupOption">
                    {{ groupOption }}
                </option>
            </select>


            <!-- Filter Button -->
            <button @click="onRefresh" class="py-2 px-6 rounded-lg bg-blue-500 text-white bg-primary text-md xl:text-lg 2xl:text-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
                <Icon name="material-symbols-light:directory-sync-rounded" />
            </button>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="overflow-y-auto table-auto border-collapse border border-gray-300 text-md xl:text-lg 2xl:text-2xl text-right min-w-full">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="px-4 py-2 border-b border-gray-300">الاسم</th>
                        <th class="px-4 py-2 border-b border-gray-300 text-center">الجنس</th>
                        <th class="px-4 py-2 border-b border-gray-300">الصف</th>
                        <th class="px-4 py-2 border-b border-gray-300 text-center">الشعبة</th>
                        <th class="px-4 py-2 border-b border-gray-300">نوع الدفع</th>
                        <th class="px-4 py-2 border-b border-gray-300">المبلغ المتبقي</th>
                        <th class="px-4 py-2 border-b border-gray-300">خصم</th>
                        <th class="px-4 py-2 border-b border-gray-300"></th>
                    </tr>
                </thead>
                <tbody class="text-md xl:text-lg 2xl:text-2xl">
                    <tr v-for="(student, index) in filteredStudents" :key="student.id" class="hover:bg-gray-50">
                        <td class="px-4 py-2 border-b border-gray-300"> <Icon class="hidden xl:inline-block translate-y-1" name="material-symbols:account-circle-outline" color="black" /> {{ student.student_name }} </td>
                        <td class="px-4 py-2 border-b border-gray-300 text-center">{{ student.gender }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ student.grade }}</td>
                        <td class="px-4 py-2 border-b border-gray-300 text-center">{{ student.group }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ student.payment_type }}</td>
                        <td class="px-4 py-2 border-b border-gray-300 text-red-500">
                            IQD{{ student.amount_paid }}
                        </td>
                        <td class="px-4 py-2 border-b border-gray-300">
                            <span  class="px-2 py-1 text-xs rounded-full" :class="{'bg-green-100 text-green-600': student.discount_percentage > 0, 'bg-red-100 text-red-600': student.discount_percentage <= 0 }">
                                {{ student.discount_percentage > 0 ? 'نعم' : 'لا' }}
                            </span>
                        </td>
                        <td class="px-4 py-2 border-b border-gray-300 flex justify-evenly">
                            <NuxtLink :to="`/studentinformation/${student.id}`">
                                <Icon name="ic:outline-remove-red-eye" />
                            </NuxtLink>
                            <NuxtLink :to="`/student/editstudentinformation/${student.id}`">
                                <Icon name="tabler:settings" color="black" />
                            </NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useStudents } from '~/store/useStore';
//   onclick of the student it will open a modal with the basic student information

const store = useStudents()

// Reactive state for filters and search
const searchQuery = ref('');
const selectedClass = ref();
const selectedGroup = ref('');
const filteredStudents = ref([]);

async function onRefresh() {
    await store.fetchStudents();
    await store.fetchGroups();
    await store.fetchGrades();
}


onMounted(async () => {
    await store.fetchStudents();
    await store.fetchGroups();
    await store.fetchGrades();
    filteredStudents.value = store.students;
});


// Computed properties for unique class and group options
const gradeOptions = computed(() => {
    return [...new Set(store.grades.map((student) => student.grade))];
});

const groupOptions = computed(() => {
    return [...new Set(store.groups.map((student) => student.group))];
});

// Filter students based on input criteria
const filterResults = () => {
    filteredStudents.value = store.students.filter((student) => {
        const matchesSearch =
            !searchQuery.value ||
            student.student_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            student.gender.toLowerCase().includes(searchQuery.value.toLowerCase());

        const matchesClass =
            !selectedClass.value || student.grade === selectedClass.value;

        const matchesGroup =
            !selectedGroup.value || student.group === selectedGroup.value;

        return matchesSearch && matchesClass && matchesGroup;
    });
};



// Watch for changes to search criteria and reapply filters
watch([searchQuery, selectedClass, selectedGroup], filterResults);
</script>
