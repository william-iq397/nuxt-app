<template>
    <div class="grid-cols-2 grid w-full 2xl:w-1/2">
        <PieChart menPercentage=60 womenPercenta=40 />
        <div class="flex flex-col justify-between ">
            <h6 class="xl:text-2xl 2xl:text-4xl">نسبة الاساتذة</h6>
            <p class="text-base 2xl:text-lg">مخطط بياني يبين نسبة الاساتذة الى نسبة الأستاذات في المدرسة</p>
            <div class="flex flex-col justify-center items-end gap-1">
                <div class="flex justify-between items-center w-48">
                    <p class="text-lg 2xl:text-lg">نسبة الاساتذة</p>
                    <div class="w-10 h-6 bg-pink rounded-lg"></div>
                </div>
                <div class="flex justify-between items-center w-48">
                    <p class="text-lg 2xl:text-lg">نسبة الاستاذات</p>
                    <div class="w-10 h-6 bg-pink rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PieChart from '~/components/PieChart.vue';
</script>