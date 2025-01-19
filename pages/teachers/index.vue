<template>
    <div class="mx-auto p-4 w-full" dir="rtl">
        <!-- Page Header -->
        <h1 class="text-2xl font-bold text-gray-800 text-right my-4">صفحة الاساتذة</h1>
        <!-- Responsive Table -->

        <div class="mb-6 flex flex-col md:flex-row gap-4">
            <!-- Search -->
            <input type="text" v-model="searchQuery" placeholder="ابحث بالاسم" class="w-1/3 py-2 px-4 text-md xl:text-lg 2xl:text-2xl rounded-lg bg-white border border-gray-300 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

            <!-- Filter by Class -->

            <select v-model="selectedClass" class="text-md xl:text-lg 2xl:text-2xl w-38 py-2 px-4 rounded-lg  border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">المرحلة</option>
                <option v-for="classOption in gradeOptions" :key="classOption" :value="classOption">
                    {{ classOption }}
                </option>
            </select>

            <!-- Filter by Group -->
            <select class="text-md xl:text-lg 2xl:text-2xl w-38 py-2 px-4 rounded-lg  border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" v-model="selectedGender">
                <option value="">الجنس</option>
                <option v-for="gender in genderOptions" :key="gender" :value="gender">
                    {{ gender }}
                </option>
            </select>


            <!-- Filter Button -->
            <button @click="onRefresh" class="py-2 px-6 rounded-lg bg-blue-500 text-white bg-primary text-md xl:text-lg 2xl:text-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
                <Icon name="material-symbols-light:directory-sync-rounded" />
            </button>
        </div>

        <div class="overflow-x-auto mt-8">
            <table class="overflow-y-auto table-auto border-collapse border border-gray-300 text-md xl:text-lg 2xl:text-2xl text-right min-w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2 border-b border-gray-300">اسم الأستاذ</th>
                        <th class="px-4 py-2 border-b border-gray-300">الجنس</th>
                        <th class="px-4 py-2 border-b border-gray-300">المرحلة</th>
                        <th class="px-4 py-2 border-b border-gray-300">عدد الصفوف</th>
                        <th class="px-4 py-2 border-b border-gray-300">المنهج الدراسي</th>
                        <th class="px-4 py-2 border-b border-gray-300">رقم الهاتف</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="teacher in filteredTeachers" :key="teacher.id" class="hover:bg-gray-100">
                        <td class="px-4 py-2 border-b border-gray-300">{{ teacher.teacher_name }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ teacher.gender }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ teacher.grade }}</td>
                        <td class="px-12 py-2 border-b border-gray-300">{{ teacher.class_number }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ teacher.curriculum }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ teacher.phone_number }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStudents } from "~/store/useStore";

const store = useStudents();
const searchQuery = ref('');
const selectedClass = ref();
const selectedGender = ref('');
const filteredTeachers = ref([]);

function onRefresh() {
    store.fetchTeachers();
    filteredTeachers.value = store.teachers;
}

// Computed properties for unique class and group options
const gradeOptions = computed(() => {
    return [...new Set(store.grades.map((student) => student.grade))];
});

const genderOptions = ['ذكر', 'انثى']; 

// Filter teachers based on input criteria
const filterResults = () => {
    filteredTeachers.value = store.teachers.filter((teacher) => {
        const matchesSearch =
            !searchQuery.value ||
            teacher.teacher_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            teacher.gender.toLowerCase().includes(searchQuery.value.toLowerCase());

        const matchesClass =
            !selectedClass.value || teacher.grade === selectedClass.value;
            
            const matchesGroup =
            !selectedGender.value || teacher.gender === selectedGender.value;
            
            return matchesSearch && matchesClass && matchesGroup;
        });
    };
    
    
    
onMounted(() => {
    store.fetchTeachers();
    store.fetchGroups()
    store.fetchGrades()
    filteredTeachers.value = store.teachers // Ensure store.teachers is populated at this point
})
// Watch for changes to search criteria and reapply filters
watch([searchQuery, selectedClass, selectedGender], filterResults);

</script>

<style scoped>
.table-auto th, .table-auto td {
    text-align: right;
}
</style>
