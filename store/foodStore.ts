import { defineStore } from "pinia";

interface FoodItem {
  id: number;
  title: string;
  price: number;
  // Add other properties of a food item
}

interface Order {
  id: number;
  orderTitle: string;
  orderQuantity: number;
  totalPrice: number;
}

interface FoodStoreState {
  food: FoodItem[];
  orders: Order[];
  title: string;
  orderTitle: string;
  isLoading: boolean;
  inputValue: string;
  quantity: number;
  price: number;
  totalPrice: number;
  isSliderOpen: boolean;
}

export const useFood = defineStore("foodStore", {
  state: (): FoodStoreState => ({
    food: [],
    orders: [],
    title: "",
    isLoading: false,
    orderTitle: "",
    inputValue: "",
    quantity: 1,
    price: 0,
    totalPrice: 0,
    isSliderOpen: false,
  }),
  getters: {
    getLoading: (state) => state.isLoading,
    getFilteredFood: (state) => {
      let food = state.food;

      if (state.inputValue) {
        food = food.filter(plate => {
          return  plate.title.toLowerCase().includes(state.inputValue.toLowerCase())
      });
      }

      return food;
    },
  },

  actions: {
    //get resources
    async fetch() {
      const { data } = await useFetch('https://fakestoreapi.com/products/');
      this.food = data.value as FoodItem[];
    },

    async savePrice(price: number, title: string) {
      this.price = price;
      this.title = title;
      this.orderTitle = title
    },
  },
});
