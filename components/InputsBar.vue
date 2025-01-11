<template>
    <div class="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md" dir="rtl">
      <!-- Search Input -->
      <div class="relative flex-grow">
        <input
          type="text"
          placeholder="اكتب اسم الطالب او رقم الطالب"
          class="w-full py-2 px-4 rounded-lg bg-white border border-gray-300 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l6-6M6 8h12" />
          </svg>
        </div>
      </div>
  
      <!-- Dropdowns -->
      <div class="flex space-x-4">
        <div class="relative">
          <select
            class="w-32 py-2 px-4 rounded-lg bg-white border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            <option>المرحلة</option>
          </select>
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
  
        <div class="relative">
          <select
            class="w-32 py-2 px-4 rounded-lg bg-white border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            <option>الشعبة</option>
          </select>
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
  
      <!-- Search Button -->
      <button
        class="py-2 px-6 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
      >
        بحث
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBar",
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if needed */
  </style>
  