<template>
    <div class="mx-auto p-4" dir="rtl">
        <!-- Page Header -->
        <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">إضافة أستاذ</h1>

        <!-- Add Teacher Form -->
        <form @submit.prevent="store.addTeacher" class="space-y-8 bg-white p-6 rounded-lg shadow-md">
            <!-- Grid Layout for Form Fields -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Teacher Name -->
                <div>
                    <label for="teacher_name" class="block text-gray-700 font-medium mb-2">اسم الأستاذ</label>
                    <input v-model="store.teacher.teacher_name" type="text" id="teacher_name" placeholder="اسم الأستاذ"
                    class="text-right block rounded-lg px-2.5 pb-2.5 pt-3 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                </div>

                <!-- Gender -->
                <div>
                    <label for="gender" class="block text-gray-700 font-medium mb-2">الجنس</label>
                    <select v-model="store.teacher.gender" id="gender" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="ذكر">ذكر</option>
                        <option value="انثى">أنثى</option>
                    </select>
                </div>

                <!-- Grade -->
                <div>
                    <label for="grade" class="block text-gray-700 font-medium mb-2">المرحلة</label>
                    <select v-model="store.teacher.grade" type="text" id="grade" placeholder="المرحلة الدراسية" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option v-for="grade in gradeOptions" :value="grade" :key="grade.id">{{ grade }}</option>
                    </select>
                </div>

                <!-- Class Number -->
                <div>
                    <label for="class_number" class="block text-gray-700 font-medium mb-2">عدد الصفوف</label>
                    <input v-model="store.teacher.class_number" type="number" id="class_number" placeholder="رقم الصف"
                    class="text-right block rounded-lg px-2.5 pb-2.5 pt-3 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                </div>

                <!-- Curriculum -->
                <div>
                    <label for="curriculum" class="block text-gray-700 font-medium mb-2">المنهج الدراسي</label>
                    <input v-model="store.teacher.curriculum" type="text" id="curriculum" placeholder="اسم المنهج"
                    class="text-right block rounded-lg px-2.5 pb-2.5 pt-3 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                </div>

                <!-- Phone Number -->
                <div>
                    <label for="phone_number" class="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                    <input v-model="store.teacher.phone_number" type="text" id="phone_number" placeholder="رقم الهاتف"
                    class="text-right block rounded-lg px-2.5 pb-2.5 pt-3 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition mt-6">إضافة</button>
        </form>
    </div>
</template>


<script setup>
import { useStudents } from '~/store/useStore';

const store = useStudents();

const gradeOptions = computed(() => {
    return [...new Set(store.grades.map(grade => grade.grade))]
})

onMounted(() => {
    store.fetchGrades()
})

</script>

<style scoped>
.grid div {
    margin : 2rem;
}
</style>