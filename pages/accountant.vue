<template>
    <div class="flex flex-col w-full h-full font-semibold">
        <h5 class="p-2 text-right">صفحة الحسابات</h5>

        <StudentsStatistics/>
        <AccountantTable/>
    </div>
</template>

<script setup layout="default">
import AccountantTable from '../components/AccountantTable.vue'
import StudentsStatistics from '../components/StudentsStatistics.vue'
</script>