<template>
    <div class="grid-cols-2 grid w-full 2xl:w-1/2">
        <div class="py-6 mt-4 grid place-items-center px-2">
            <div id="student-pie-chart"></div>
        </div>
        <div class="flex flex-col justify-between">
            <h6 class="xl:text-xl 2xl:text-3xl">نسبة الطلاب والطالبات</h6>
            <p class="text-base 2xl:text-lg">مخطط بياني يبين نسبة الطلاب الى نسبة الطالبات في المدرسة</p>
            <div class="flex flex-col justify-start items-end gap-1">
                <div class="justify-between items-center w-48 hidden">
                    <p class="text-base 2xl:text-lg">نسبة الطلاب</p>
                    <div class="w-10 h-6 bg-pink rounded-lg"></div>
                </div>
                <div class="hidden justify-between items-center gap-2 w-48">
                    <p class="text-lg 2xl:text-lg">نسبة الطالبات</p>
                    <div class="w-10 h-6 bg-pink rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const chartConfig = {
    // change the titles of the seires
    series: [49, 50],
    labels: ["الاناث", "الذكور"],
    chart: {
        type: "pie",
        width: 320,
        height: 320,
        toolbar: {
            show: false,
        },
    },
    title: {
        show: "الطلاب والطالبات",
    },
    dataLabels: {
        enabled: true,
        style : {
            fontSize: "16px",
            fontFamily: "Cairo, sans-serif",
            fontWeight: 400,
        }
    },
    colors: [ "pink", "purple"],
    legend: {
        show: true,
        labels: {
            colors: "#000", // Optional: Set color of the labels
            useSeriesColors: false, // Optional: Use series colors for labels
        },
        fontSize: "25px", // Change this to adjust label size in the legend
        fontFamily: "Cairo, sans-serif", // Optional: Change font family
        fontWeight: 400, // Optional: Bold font
        overFlow: "hidden"
    },
};

onMounted(() => {
    const chart = new ApexCharts(document.querySelector("#student-pie-chart"), chartConfig);
    chart.render();
})
</script>