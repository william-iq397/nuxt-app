<template>
    <div class="statistics-container w-full">
      <div v-for="(stat, index) in statistics" :key="index" class="stat-card w-1/6 h-32">
        <div class="details flex flex-col">
          <p class="stat-number">{{ stat.count }}</p>
          <h6 class="stat-label">{{ stat.label }}</h6>
        </div>
        <div>
          <Icon :name="stat.icon" class="stat-icon text-primary" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const statistics = ref([
    {
      label: 'Total People',
      count: 150,
      icon: 'ri:graduation-cap-line',
    },
    {
      label: 'Teachers',
      count: 25,
      icon: 'uil:bag',
    },
    {
      label: 'Students Paid',
      count: 100,
      icon: 'humbleicons:currency-dollar-circle',
    },
    {
      label: 'Students Unpaid',
      count: 25,
      icon: 'bitcoin-icons:no-dollars-outline',
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
    align-items: center;
    justify-content: center;
    padding: 10px;
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
  }
  
  .details {
    text-align: center;
  }
  
  .stat-number {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .stat-label {
    color: #555;
  }
  </style>
  