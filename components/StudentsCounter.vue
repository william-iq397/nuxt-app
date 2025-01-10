<template>
  <div class="chart-container">
    <div v-for="(group, index) in groups" :key="index" class="chart-row">
      <span class="label">{{ group.name }}</span>
      <div class="bar" :style="{ width: group.percentage + '%', backgroundColor: group.color }">
        <span class="percentage">{{ group.percentage }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [
      { name: 'Children', count: 30, color: '#C3C3FF' },
      { name: 'Adults', count: 50, color: '#2C2BB5' },
      { name: 'Elderly', count: 20, color: '#CF6EFC' },
    ],
  },
});

// Calculate percentages for each group
const total = props.data.reduce((sum, group) => sum + group.count, 0);
const groups = props.data.map((group) => ({
  ...group,
  percentage: ((group.count / total) * 100).toFixed(2),
}));
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

.chart-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  flex: 1;
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap; /* Prevent label from breaking */
}

.bar {
  flex-grow: 1;
  position: relative;
  height: 25px;
  border-radius: 5px;
  overflow: hidden;
  background-color: lightgray;
}

.percentage {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 0 3px black; /* Improve text visibility */
}
</style>
