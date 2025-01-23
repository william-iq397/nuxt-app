<template>
    <section class="flex justify-center flex-wrap w-full mx-auto my-4 gap-4" dir="rtl">
        <NuxtLink to="studentsrequests/" class="w-1/6 h-32 border border-solid border-black rounded-lg">
            <div class="flex flex-col justify-center items-center h-full">
                <h3 class="text-danger font-bold">{{ store.accountantStudents.length }}</h3>
                <h4>طلبات التسجيل</h4>
            </div>
        </NuxtLink>
            <div class="flex flex-col justify-center items-center w-1/6 h-32 border border-solid border-black rounded-lg">
                <h3 class="text-danger font-bold">
  {{ store.students.filter(std => {
    const totalWithDiscount = std.discount_percentage 
      ? std.total_amount - (std.total_amount * (std.discount_percentage / 100)) 
      : std.total_amount; // If no discount, total remains the same
    return std.amount_paid >= totalWithDiscount; // Check if the amount paid covers the total
  }).length }}
</h3>

                <h4>تم الدفع</h4>
            </div>
        <div class="flex flex-col justify-center items-center w-1/6 h-32 border border-solid border-black rounded-lg">
            <h3 class="text-pink-500 font-bold">{{ store.students.filter(std => std.payment_type == 'اقساط' && (std.total_amount != std.amount_paid)).length }}</h3>
            <h4>في الاقساط</h4>
        </div>
        <div class="flex flex-col justify-center items-center w-1/6 h-32 border border-solid border-black rounded-lg">
            <h3 class="text-primary font-bold">{{ store.students.filter(std => std.payment_type == 'دفع كامل' && (std.total_amount != std.amount_paid)).length }}</h3>
            <h4>عليه التسديد</h4>
        </div>
    </section>
</template>

<script setup>
import { useStudents } from '~/store/useStore';

const store = useStudents()


onMounted(() => {
    store.fetchAccountantStudents()
    store.fetchStudents()
})

</script>
