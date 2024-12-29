import { useProductsApi } from "./products.api";
import { useMockedProductsApi } from "./products.api-mock";

const productsApi = (() => {
  if (import.meta.env.VITE_APP_BACKEND_URL == "local") {
    console.log("Products API Mock created");
    return useMockedProductsApi();
  } else {
    return useProductsApi();
  }
})();

export { productsApi };
export { normalizeProductPayload } from "./products.normalizers";
export type { ProductData, ProductPayload } from "./products.types";
