<template>
    <div class="w-full h-full flex gap-4 text-right">
        <div class="w-full flex flex-col justify-start gap-8 ">
            <AccountantStudentsStatistics/>
            <MainStatistics />
            <RegisterSection/>
            <div class="flex justify-between gap-4 w-full ">
                <StudentsPieChart />
                <TeachersPieChart />
            </div>
            <StudentsCounter />
        </div>
    </div>
</template>

<script setup layout="default">
import StudentsStatistics from '~/components/accountant/StudentsStatistics.vue';
import MainStatistics from '~/components/MainStatistics.vue';
import RegisterSection from '~/components/RegisterSection.vue';
</script>