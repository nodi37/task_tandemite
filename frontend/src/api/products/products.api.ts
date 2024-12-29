import { PaginatedData, Response } from "../shared";
import { normalizeProductPayload } from "./products.normalizers";
import { ProductData, ProductPayload } from "./products.types";

const useProductsApi = () => {
  const backendUrl =
    import.meta.env.VITE_APP_BACKEND_URL ?? "http://localhost:3000"; // Should only come from environment variables

  const fetchProducts = async (
    page: number,
    type: "magazine" | "course" | "all" = "all",
    limit: number = 8
  ): Promise<Response<PaginatedData<ProductData>>> => {
    try {
      const typeQuery = type != "all" ? `&where[type][equals]=${type}` : "";

      const response = await fetch(
        `${backendUrl}/api/products?limit=${limit}&page=${page}${typeQuery}`
      );

      const { docs, ...restOfPayload }: PaginatedData<ProductPayload> =
        await response.json();

      const data = {
        ...restOfPayload,
        docs: docs.map((product) => normalizeProductPayload(product)),
      };

      return { success: true, data };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Błąd podczas wczytywania produktów" };
    }
  };

  const fetchProductById = async (
    id: string
  ): Promise<Response<ProductData>> => {
    try {
      const response = await fetch(`${backendUrl}/api/products/${id}`);

      const payload: ProductPayload = await response.json();
      const data = normalizeProductPayload(payload);

      return { success: true, data };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Błąd podczas wczytywania produktu" };
    }
  };

  return {
    fetchProducts,
    fetchProductById,
  };
};

export { useProductsApi };
