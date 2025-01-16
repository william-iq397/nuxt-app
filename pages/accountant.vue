<template>
    <div class="flex flex-col w-full h-full font-semibold">
        <h3 class="p-2 text-right">صفحة الحسابات</h3>

        <StudentsStatistics/>
        <AccountantTable/>
    </div>
</template>

<script setup layout="default">
import AccountantTable from '../components/accountant/AccountantTable.vue'
import StudentsStatistics from '../components/accountant/StudentsStatistics.vue'
</script>