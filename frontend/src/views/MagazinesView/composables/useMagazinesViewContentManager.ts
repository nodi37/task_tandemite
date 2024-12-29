import { ProductData, productsApi } from "@/api/products";
import { reactive, ref } from "vue";

type MagazinesViewData = {
  products: ProductData[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  currentPage: number;
  prevPage: number | null;
  nextPage: number | null;
};

const useMagazinesViewContentManager = () => {
  const state = ref<"idle" | "loading" | "loaded" | "error">("idle");
  const data = reactive<MagazinesViewData>({
    products: [],
    hasNextPage: false,
    hasPrevPage: false,
    totalPages: 1,
    currentPage: 1,
    prevPage: null,
    nextPage: 2,
  });

  const loadMagazines = async (page: number, limit?: number) => {
    state.value = "loading";
    const { success, data: response } = await productsApi.fetchProducts(
      page,
      "magazine",
      limit
    );

    if (!success) {
      state.value = "error";
      return;
    }

    const { docs, ...common } = response;
    Object.assign(data, common);
    data.products = docs;
    state.value = "loaded";
  };

  return {
    state,
    data,
    loadMagazines,
  };
};

export { useMagazinesViewContentManager };
