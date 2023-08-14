import { defineStore } from "pinia";

export const useFood = defineStore("foodStore", {
  state: () => ({
    food: [],
    isLoading: false,
    inputValue: "",
    quantity: 1,
    price: 0,
    totalPrice: 0,
    isSliderOpen: false,
    // .range((this.fetchPagination - 1) * 15, (this.fetchPagination * 15) - 1)

  }),
  getters: {
    getLoading: (state) => state.isLoading,
    getFilteredFood: (state) => {
      let food = state.food

      if (state.inputValue) {
        food = food.filter((plate) =>
          plate.title
            .toLowerCase()
            .includes(state.inputValue.toLowerCase())
        );
      }

      return food
    }
  },

  actions: {
    //get resources
    async fetch() {  
        // const {data} = useFetch('https://fakestoreapi.com/products/')
        const { data } = await useFetch('https://fakestoreapi.com/products/');
        this.food = data.value
    },

    async callData() {
      console.log(this.price)
    },

    async savePrice(price) {
      this.price = price
    },

    async increment() {
      this.quantity++
      this.totalPrice = this.price * this.quantity
    }, 

    async decrement() {
      this.quantity--
      this.totalPrice = this.price * this.quantity
    }

    },
});
