<template>
    <div class="w-full h-full flex gap-4 text-right">
        <div class="w-full flex flex-col justify-start gap-8 ">
            <AccountantStudentsStatistics/>
            <MainStatistics />
            <RegisterSection/>
            <div class="flex flex-col lg:flex-row justify-between gap-4 w-full">
                <StudentsPieChart class="w-1/2" />
                <TeachersPieChart class="w-1/2" />
            </div>
            <BarChart />
        </div>
    </div>
</template>

<script setup layout="default">
import StudentsStatistics from '~/components/accountant/StudentsStatistics.vue';
import MainStatistics from '~/components/MainStatistics.vue';
import RegisterSection from '~/components/RegisterSection.vue';
</script>