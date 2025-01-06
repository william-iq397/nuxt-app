<template>
    <!-- component -->
    <div
        class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img class="h-48 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Image" />
        <div class="p-4">
            <h2 class="mb-2 text-lg font-medium  text-gray-900">Product Name</h2>
            <div class="flex items-center justify-between">
                <!-- buy button -->
                <p class="mr-2 text-lg font-semibold text-gray-900">$30.00</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['products'])

</script>