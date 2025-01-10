<template>
    <div class="statistics-container">
      <div v-for="(stat, index) in statistics" :key="index" class="stat-card">
        <div>
          <Icon :name="stat.icon" class="stat-icon" />
        </div>
        <div class="details">
          <p class="stat-number">{{ stat.count }}</p>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const statistics = ref([
    {
      label: 'Total People',
      count: 150,
      icon: 'mdi-account-group',
    },
    {
      label: 'Teachers',
      count: 25,
      icon: 'mdi-teach',
    },
    {
      label: 'Students Paid',
      count: 100,
      icon: 'mdi-cash-check',
    },
    {
      label: 'Students Unpaid',
      count: 25,
      icon: 'mdi-cash-remove',
    },
  ]);
  </script>
  
  <style scoped>
  .statistics-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: nowrap;
    margin: 20px auto;
  }
  
  .stat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 150px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .stat-icon {
    font-size: 3rem;
    color: #4caf50; /* Adjust icon color */
  }
  
  .details {
    text-align: center;
  }
  
  .stat-number {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .stat-label {
    font-size: 1rem;
    color: #555;
  }
  </style>
  