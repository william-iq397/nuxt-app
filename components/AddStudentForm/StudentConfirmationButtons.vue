<template>
  <div class="flex justify-evenly my-12 py-12">
    <button 
      @click="onCancel" 
      class="w-1/3 px-6 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-100">
      {{ cancelLabel }}
    </button>
    <button 
      @click="onSave" 
      class="w-1/3 px-6 py-2 text-white bg-primary rounded-lg hover:bg-blue-700">
      {{ saveLabel }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  onCancel: {
    type: Function,
    required: true,
  },
  onSave: {
    type: Function,
    required: true,
  },
  cancelLabel: {
    type: String,
    default: "Cancel",
  },
  saveLabel: {
    type: String,
    default: "Save",
  },
});
</script>
