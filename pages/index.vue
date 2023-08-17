<template>
    <div class="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 overflow-hidden max-w-7xl mx-auto">
        <div @click.prevent="foodStore.savePrice(item.price)" v-for="item in foodStore.getFilteredFood" :key="item.id">
            <Card @click.prevent="moveSlider()" :item="item" />
        </div>
    </div>

    <!-- SLIDER -->
    <div ref="sliderRef" class="text-white bg-gray-700 opacity-90  w-full xl:w-1/3 h-max fixed transition-all top-0 right-[-100%] p-8">
        <div class="flex flex-col items-end justify-center select-none">
            <span @click="removeSlider()" class="text-3xl border border-solid border-gray-200 bg-gray-600 text-white px-5 py-4 rounded-md hover:cursor-pointer">X</span>
            <div class="flex items-center justify-evenly w-full h-full">
                <button @click="foodStore.increment()" class="text-5xl border border-solid border-gray-200 bg-gray-600 text-white px-6 py-4 m-2 rounded-md hover:cursor-pointer">+</button>
                <span class="text-3xl">{{ foodStore.price }}</span>
                <button @click="foodStore.decrement()" class="text-5xl border border-solid border-gray-200 bg-gray-600 text-white px-6 py-4 m-2 rounded-md hover:cursor-pointer">-</button>
            </div>
            <div class="mx-auto text-3xl my-8">
                Quantity : {{ foodStore.quantity }}
            </div>
            <div class="mx-auto text-3xl my-8">
                Total Price : {{ foodStore.totalPrice.toString().slice(0, 5) }}
            </div>

            <div class="flex justify-evenly w-full text-3xl">
                <button @click="removeSlider()" class="bg-orange-600 w-full p-2 py-4 rounded-md">Cancel payment</button>
                <button @click="showModal()" class="bg-green-500 w-full p-2 py-4 rounded-md">Buy</button>
            </div>
        </div>
    </div>

    <LazyModal :visible="isModalVisible" :close="closeModal" :confirm="handlePurchase"  />

   
</template>

<script setup lang="ts">
import { useFood } from "../store/foodStore"
const isModalVisible = ref(false);
const sliderRef = ref<HTMLElement | null>(null);
const foodStore = useFood()
foodStore.fetch()


function moveSlider() {
    if (!foodStore.isSliderOpen  && sliderRef.value) {
        sliderRef.value.style.right = "0%"
        foodStore.isSliderOpen = true
    }
}

function removeSlider() {
    if (foodStore.isSliderOpen  && sliderRef.value) {
        sliderRef.value.style.right = "-100%"
        foodStore.isSliderOpen = false
    }
    reset()
}

function reset() {
    foodStore.price = 0
    foodStore.quantity = 1
    foodStore.totalPrice = 0
}


function showModal() {
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
  removeSlider()
}

function handlePurchase() {
  // Logic for handling the purchase, update as needed
  alert("you have purchased a product")
  removeSlider()
  closeModal();
}


// watch(() => foodStore.inputValue, (newValue) => {
//   console.log(`newValue is ${newValue}`);
// });

</script>


