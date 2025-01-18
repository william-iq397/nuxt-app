<template>
    <div class="grid-cols-2 grid w-full 2xl:w-1/2 text-md 2xl:text-lg">

        <div class="py-6 mt-4 grid place-items-center px-2">
            <div id="teacher-pie-chart"></div>
        </div>

        <div class="flex flex-col justify-between h-full">
            <h6 class="xl:text-xl 2xl:text-3xl">نسبة الاساتذة والاستاذاة</h6>
            <p class="text-base 2xl:text-lg">مخطط بياني يبين نسبة الطلاب الى نسبة الطالبات في المدرسة</p>
            <div class="flex flex-col justify-start items-end gap-1">
                <div class="hidden justify-between items-center w-48">
                    <p class="text-base 2xl:text-lg">نسبة الاساتذة</p>
                    <div class="w-10 h-6 bg-pink rounded-lg"></div>
                </div>
                <div class="hidden justify-between items-center gap-2 w-48">
                    <p class="text-lg 2xl:text-lg">نسبة الاستاذاة</p>
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
        show: "المعلمين والمعلمات",
    },
    dataLabels: {
        enabled: true,
        style : {
            fontSize: "16px",
            fontFamily: "Cairo, sans-serif",
            fontWeight: 400,
        }
    },
    colors: [ "#1e88e5", "#A6A5FF"],
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
    const chart = new ApexCharts(document.querySelector("#teacher-pie-chart"), chartConfig);
    chart.render();
})
</script>