<template>
    <div class="grid-cols-2 grid w-full 2xl:w-1/2">
        <PieChart menPercentage=70 womenPercenta=30 />
        <div class="flex flex-col justify-between">
            <h6 class="xl:text-xl 2xl:text-3xl">نسبة الطلاب والطالبات</h6>
            <p class="text-base 2xl:text-lg">مخطط بياني يبين نسبة الطلاب الى نسبة الطالبات في المدرسة</p>
            <div class="flex flex-col justify-start items-end gap-1">
                <div class="flex justify-between items-center w-48">
                    <p class="text-base 2xl:text-lg">نسبة الطلاب</p>
                    <div class="w-10 h-6 bg-pink-500 rounded-lg"></div>
                </div>
                <div class="flex justify-between items-center gap-2 w-48">
                    <p class="text-lg 2xl:text-lg">نسبة الطالبات</p>
                    <div class="w-10 h-6 bg-pink-500 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PieChart from '~/components/PieChart.vue';
</script>