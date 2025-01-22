<template>
    <div class=" bg-gray-50 flex items-center justify-center p-2">
        <div class="bg-white shadow-md rounded-lg w-full max-w-md">
            <h1 class="text-xl font-bold mb-6 text-center">إنشاء حساب طالب</h1>

            <form class="space-y-4">
                <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                    <input type="text" id="name" v-model="store.student.student_name" class="w-full px-4 py-2 mt-1 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="أدخل اسم الطالب" required />
                </div>

                <!-- Phone Number -->
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                    <input type="tel" id="phone" v-model="store.student.phone_number" class="w-full px-4 py-2 mt-1 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500" required />
                </div> {{ store.student.phone_number }}

                <!-- Password -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
                    <input type="password" id="password" v-model="store.student.password" class="w-full px-4 py-2 mt-1 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500" required />
                </div>

            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStudents } from '~/store/useStore';

// Reactive form data
const store = useStudents()

</script>