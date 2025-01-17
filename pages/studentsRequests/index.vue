<template>
    <div class="w-full rounded-lg shadow-md p-6 text-md xl:text-lg 2xl:text-2xl" dir="rtl">
        <table class="table-auto border-collapse border border-gray-300 text-md xl:text-lg 2xl:text-2xl text-right min-w-full">
            <thead class="bg-gray-100">
                <tr class="flex justify-evenly">
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
            <tbody class="text-md xl:text-lg 2xl:text-2xl">
                <tr v-for="(student, index) in store.accountantStudents" :key="student.id" class="hover:bg-gray-50">
                <NuxtLink :to="`/editpaymentinfo/${student.id}`" class="flex justify-evenly">
                        <td class="px-4 py-2 border-b border-gray-300 flex items-center gap-2">
                            <Icon name="material-symbols:account-circle-outline" color="black" /> {{ student.student_name }}
                        </td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ student.gender }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ student.grade }}</td>
                        <td class="px-4 py-2 border-b border-gray-300">{{ student.student_birthdate }}</td>
                        <td class="px-4 py-2 border-b border-gray-300 text-red-500">
                            ${{ student.disease_type }}
                        </td>
                        <td class="px-4 py-2 border-b border-gray-300">
                            <span class="px-2 py-1 text-xs rounded-full"
                                :class="student.hasDiscount ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">
                                {{ student.does_student_has_disease }}
                            </span>
                        </td>
                        <td class="px-4 py-2 border-b border-gray-300">
                            <Icon name="tabler:settings" color="black" />
                        </td>
                    </NuxtLink>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useStudents } from '~/store/useStore';


const store = useStudents()

onMounted(() => {
    store.fetchStudents()
})
</script>