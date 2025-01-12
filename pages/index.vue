<template>
    <div class="w-full h-full flex gap-4 text-right">
        <div class="w-fit">
            <NuxtLink to="/login">go to auth</NuxtLink>
            <BarChart />
        </div>
        <div class="w-full flex flex-col justify-start gap-8 ">
            <Statistics />
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
import BarChart from '~/components/BarChart.vue';
import PieChart from '~/components/PieChart.vue';
import RegisterSection from '~/components/RegisterSection.vue';
</script>