<template>
    <div v-for="order in props.storeOrders" :key="order.id" class="text-white">
        {{ order.orderTitle }}
        and
        {{ order.quantity }}
    </div>
</template>

<script setup>
const props = defineProps(['storeOrders'])
</script>