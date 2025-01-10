<template>
  <div class="pie-chart w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[200px] 2xl:h-[200px]" :style="chartStyle">
    <!-- White circle at the center -->
    <div class="white-circle"></div>
    <!-- Labels for men and women -->
    <div class="label men">{{ menPercentage }}% Men</div>
    <div class="label women">{{ womenPercentage }}% Women</div>
  </div>
</template>

<script setup>
// Props for percentages
const props = defineProps({
  menPercentage: {
    type: Number,
    required: true,
    default: 50,
  },
  womenPercentage: {
    type: Number,
    required: true,
    default: 50,
  },
});

// Computed style for the pie chart
const chartStyle = computed(() => {
  return {
    background: `conic-gradient(
      blue 0%,
      blue ${props.menPercentage}%,
      pink ${props.menPercentage}%,
      pink ${props.menPercentage + props.womenPercentage}%
    )`,
  };
});
</script>

<style scoped>
.pie-chart {
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: conic-gradient(blue 0%, blue 50%, pink 50%, pink 100%);
}

/* White circle in the center */
.white-circle {
  width: 80px; /* Adjust size for desired white circle */
  height: 80px;
  background: white;
  border-radius: 50%;
  position: absolute;
  z-index: 1; /* Ensure it's on top of the pie chart */
}

/* Labels for percentages */
.label {
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  z-index: 2; /* Ensure labels are on top of the white circle */
}

.men {
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.women {
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
