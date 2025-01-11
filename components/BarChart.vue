<template>
    <div class="bg-gray-100 p-3 ml-3 rounded-lg shadow-md">
      <!-- Title and Year -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold text-gray-700">2024</h2>
        <h3 class="text-gray-600">نسبة المدرسة لصفوف المنتهيه</h3>
      </div>
  
      <!-- Legend -->
      <div class="flex justify-center space-x-4 mb-6">
        <div class="flex items-center space-x-2">
          <span class="w-4 h-4 bg-pink rounded-full"></span>
          <span class="text-gray-600 text-sm">الثالث متوسط</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="w-4 h-4 bg-blue rounded-full"></span>
          <span class="text-gray-600 text-sm">السادس ابتدائي</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="w-4 h-4 bg-[#C3C3FF] rounded-full"></span>
          <span class="text-gray-600 text-sm">السادس اعدادي</span>
        </div>
      </div>
  
      <!-- Bar Chart -->
      <div class="relative flex flex-col items-start">
        <!-- Y-Axis -->
        <div class="flex flex-col justify-between items-start text-gray-500 text-sm">
          <span class="relative">100%<span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span> 
          <span class="relative">90% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">80% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">70% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">60% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">50% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">40% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">30% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">20% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
          <span class="relative">10% <span class="w-full h-[1px] absolute left-10 -top-2 text-gray-400">__________________________</span></span>
        </div>
  
        <!-- Bars -->
        <div class="ml-10 absolute z-30 h-full flex items-end space-x-4">
          <div class="w-10 h-[60%] bg-pink rounded-md"></div>
          <div class="w-12 bg-blue h-[30%] rounded-md"></div>
          <div class="w-12 bg-[#C3C3FF] h-[70%] rounded-md"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BarChart",
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  