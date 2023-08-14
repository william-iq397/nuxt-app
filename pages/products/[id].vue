<template>
    <div v-if="data" class="flex flex-col">
        <h1>{{ data.title }}</h1>
        <h1>{{ data.id }}</h1>
        <h1>{{ data.price }}</h1>
        <img :src="data.image" :alt="data.description" width="100" height="100">
    </div>
    <div v-else>
        data is not fetched correctly
    </div>
</template>

<script setup>
const id = useRoute().params.id;
const { data } = await useFetch(`https://fakestoreapi.com/products/${id}`, {key: id})
</script>