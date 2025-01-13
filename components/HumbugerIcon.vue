<template>
    <div>
      <!-- Hamburger Icon -->
      <button class="flex flex-col justify-center items-center w-8 h-8 bg-primary text-white rounded-md shadow-lg z-50">
        <div class="w-5 h-0.5 bg-white mb-1"></div>
        <div class="w-5 h-0.5 bg-white mb-1"></div>
        <div class="w-5 h-0.5 bg-white"></div>
      </button>
      <!-- Sidebar -->
      <div :class="{ '-translate-x-full': isSidebarHidden }" class="sidebar transition-transform">
        <!-- Your sidebar content here -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isSidebarHidden = ref(false);
  
  function toggleSidebar() {
    isSidebarHidden.value = !isSidebarHidden.value;
  }
  </script>
  