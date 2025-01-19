<template>
  <div class="p-6 w-full">
    <div class="w-full mx-auto shadow-lg rounded-lg p-6">
      <div class="flex justify-between items-center mb-6">
        <div class="flex justify-evenly w-1/2">
          <h2 class="text-right text-xl font-semibold mb-4 p-2 rounded-lg bg-primary">الاعدادية</h2>
          <h2 class="text-right text-xl font-semibold mb-4 p-2 rounded-lg bg-darkgray">الابتدائية</h2>
          <h2 class="text-right text-xl font-semibold mb-4 p-2 rounded-lg bg-pink">المتوسطة</h2>
        </div>
        <h2 class="text-right text-xl font-semibold mb-4">نسبة الصفوف المنتهية</h2>
      </div>
      <div class="flex flex-col items-center space-y-4">
        <div v-for="(bar, index) in bars" :key="index" class="flex justify-between w-full">
          <div class="relative h-6 rounded-full overflow-hidden" :style="{ width: (bar.percentage) + '%', backgroundColor: bar.color }">
            <span class="absolute inset-0 flex items-center justify-center text-white text-base">
              ({{ bar.percentage.toFixed(0) }}%)
            </span>
          </div>
        </div>
        <div class="w-full flex justify-between text-black text-sm">
          <span>10%</span>
          <span>20%</span>
          <span>30%</span>
          <span>40%</span>
          <span>50%</span>
          <span>60%</span>
          <span>70%</span>
          <span>80%</span>
          <span>90%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bars = [
  { label: 'السادس الاعدادي', value: 10,  color: "#515151"},
  { label: 'السادس الابتدائي', value: 10,  color: "#6563FF"},
  { label: 'الثالث المتوسط', value: 80,  color: "#CF6EFC"}
];

// Calculate the total number of students
const totalStudents = bars.reduce((sum, bar) => sum + bar.value, 0);

// Calculate the percentage for each category
bars.forEach(bar => {
  bar.percentage = (bar.value / totalStudents) * 100;
});
</script>