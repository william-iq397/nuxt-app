<template>
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600  flex items-center justify-center">
        <div class="bg-white p-8 shadow-xl rounded-lg w-full max-w-md">
            <h1 class="text-2xl font-semibold text-center text-gray-800 mb-8">إنشاء حساب طالب</h1>

            <form class="space-y-6">
                <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                    <input
                        type="text"
                        id="name"
                        v-model="store.student.student_name"
                        class="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                        placeholder="أدخل اسم الطالب"
                        required
                    />
                </div>

                <!-- Phone Number -->
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                    <input
                        type="tel"
                        id="phone"
                        v-model="store.student.phone_number"
                        class="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                        placeholder="أدخل رقم الهاتف"
                        required
                    />
                </div>

                <!-- Password -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
                    <input
                        type="password"
                        id="password"
                        v-model="store.student.password"
                        class="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                        placeholder="أدخل كلمة المرور"
                        required
                    />
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center">
                    <button
                        type="submit"
                        class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                    >
                        إنشاء الحساب
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>



<script setup>
import { useStudents } from '~/store/useStore';

// Reactive form data
const store = useStudents()

</script>

<style scoped>
/* Optional - For smoother transitions */
input, button {
  transition: all 0.3s ease;
}

input:focus, button:focus {
  outline: none;
}
</style>