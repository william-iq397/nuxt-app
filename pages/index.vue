<template>
    <div class="flex justify-start ml-4">
        <div
            class="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 overflow-hidden max-w-7xl ">
            <div @click.prevent="foodStore.savePrice(item.price, item.title)" v-for="item in foodStore.getFilteredFood"
                :key="item.id">
                <LazyCard @click.prevent="moveSlider()" :item="item" />
            </div>
        </div>

        <!-- SLIDER -->
        <div ref="sliderRef"
            class="text-white bg-gray-700 opacity-90 fixed w-full xl:w-1/3 h-[70em] transition-all top-0  md:right-0 p-8">
            <div class="flex flex-col select-none">
                <span @click="removeSlider()"
                    class="text-3xl border border-solid border-gray-200 bg-gray-600 text-white px-5 py-4 rounded-md hover:cursor-pointer block md:hidden">X</span>
                <div class="flex items-center justify-evenly w-full h-full">
                    <span class="text-3xl">{{ foodStore.price }}</span>
                </div>
                <div class="mx-auto text-3xl my-8">
                    Quantity : {{ foodStore.quantity }}
                </div>


                <!-- Select Item -->
                <SelectItem />

                <!-- ORDERS -->

                <div v-for="order in orders" :key="order.id" class="text-white">
                    {{ order.orderTitle }}
                    and
                    {{ order.orderQuantity }}
                </div>

                
                
                <div class="absolute bottom-5 right-0 left-0">
                    <div class="mx-auto text-3xl my-8 text-center">
                        Total Price : {{ foodStore.totalPrice.toString().slice(0, 5) }}
                    </div>


                    <div class="flex justify-evenly w-full text-3xl">
                        <button @click="removeSlider()" class="bg-orange-600 w-full p-2 py-4 rounded-md">Cancel
                            payment</button>
                        <button @click="showModal()" class="bg-green-500 w-full p-2 py-4 rounded-md">Buy</button>
                    </div>
                </div>
            </div>
        </div>

        <LazyModal :visible="isModalVisible" :close="closeModal" :confirm="handlePurchase" />

    </div>
</template>

<script setup lang="ts">
import { useFood } from '~/store/foodStore';
const foodStore = useFood()
const orders = foodStore.orders
const isModalVisible = ref(false);
const sliderRef = ref<HTMLElement | null>(null);
foodStore.fetch()

const order = {
    // random number from 6 digits
    id: Math.floor((Math.random() * 1e9) + 1),
    orderTitle: foodStore.orderTitle,
    orderQuantity: foodStore.quantity,
    totalPrice : foodStore.totalPrice,
}

function moveSlider() {
    if (!foodStore.isSliderOpen && sliderRef.value)
    {
        sliderRef.value.style.right = "0%"
        foodStore.isSliderOpen = true
    }
}

function removeSlider() {
    if (foodStore.isSliderOpen && sliderRef.value)
    {
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
}

function handlePurchase() {
    // Logic for handling the purchase, update as needed
    alert("you have purchased a product")
    closeModal();
    foodStore.orders.push(order)
}

watch(() => foodStore.price, () => {
    foodStore.totalPrice = foodStore.quantity * foodStore.price
    console.log(foodStore.totalPrice)
}, { deep: false })


watch(() => foodStore.title, () => {
    foodStore.totalPrice = 0
    foodStore.price = 0
})

watch(() => foodStore.orders, () => {
    console.log(foodStore.orders)
})

// watch(() => foodStore.inputValue, (newValue) => {
//   console.log(`newValue is ${newValue}`);
// });

</script>