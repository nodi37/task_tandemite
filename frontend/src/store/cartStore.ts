import { ProductData, productsApi } from "@/api/products";
import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";

export const useCartStore = defineStore(
  "cartStore",
  () => {
    const cartContent = ref<Array<{ quantity: number; product: ProductData }>>(
      []
    );

    const itemsCount = computed(() =>
      cartContent.value.reduce((acc, item) => acc + item.quantity, 0)
    );

    const cartWorth = computed(() =>
      cartContent.value.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      )
    );

    const increaseItemQuantity = (id: string) => {
      const item = cartContent.value.find((item) => item.product.id === id);
      if (item) {
        item.quantity++;
      }
    };

    const decreaseItemQuantity = (id: string) => {
      const item = cartContent.value.find((item) => item.product.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    };

    const addItemToCart = (productData: ProductData) => {
      const existingItem = cartContent.value.find(
        (item) => item.product.id === productData.id
      );

      if (existingItem) {
        increaseItemQuantity(productData.id);
      } else {
        cartContent.value.push({ quantity: 1, product: productData });
      }
    };

    const deleteItemFromCart = (id: string) => {
      cartContent.value = cartContent.value.filter(
        (item) => item.product.id !== id
      );
    };

    // Updates cart content with the latest product data from the server
    // Content is persisted in localStorage
    // For non-existing products, the item is marked as removed
    // We could also remove the item from the cart, but in case of server errors the cart would be emptied
    onMounted(async () => {
      const updatedCart = await Promise.all(
        cartContent.value.map(async (item) => {
          const { success, data } = await productsApi.fetchProductById(
            item.product.id
          );
          return success
            ? { quantity: item.quantity, product: data }
            : { ...item, removed: true };
        })
      );

      cartContent.value = updatedCart;
    });

    return {
      itemsCount,
      cartWorth,
      cartContent,
      addItemToCart,
      increaseItemQuantity,
      decreaseItemQuantity,
      deleteItemFromCart,
    };
  },
  { persist: { storage: localStorage } }
);
