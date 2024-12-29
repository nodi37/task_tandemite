import { ProductData, productsApi } from "@/api/products";
import { ref } from "vue";

export const useProductViewDataLoader = () => {
  const state = ref<"idle" | "loading" | "success" | "not-found">("idle");
  const productData = ref<ProductData | null>(null);

  const loadProductData = async (productId: string) => {
    state.value = "loading";
    const { success, data } = await productsApi.fetchProductById(productId);

    if (!success) {
      state.value = "not-found";
      return;
    }

    productData.value = data;
    state.value = "success";
  };

  return {
    state,
    productData,
    loadProductData,
  };
};
