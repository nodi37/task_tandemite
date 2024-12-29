import { PaginatedData, Response } from "../shared";
import { normalizeProductPayload } from "./products.normalizers";
import { ProductData, ProductPayload } from "./products.types";

const demoData = {
  docs: [
    {
      id: "6771a037cc4238c8da4da79d",
      updatedAt: "2024-12-29T19:17:11.832Z",
      type: "magazine",
      name: "Kazus Podatkowy 1(24)2022 2022",
      description:
        "Analiza kontrowersyjnych problemów, aktualna wiedza w zakresie bieżących zagadnień podatkowych, a wszystko prezentowane przez najlepszych autorów - praktyków i w zwięzłej formie.",
      price: 43.06,
      imageSource: "url",
      imageUrl: "/miniature1.webp",
      createdAt: "2024-12-29T19:17:11.832Z",
    },
    {
      id: "6771a034cc4238c8da4da78f",
      updatedAt: "2024-12-29T19:17:08.913Z",
      type: "magazine",
      name: "Kazus Podatkowy 5(22)2021 2021",
      description:
        "Analiza kontrowersyjnych problemów, aktualna wiedza w zakresie bieżących zagadnień podatkowych, a wszystko prezentowane przez najlepszych autorów - praktyków i w zwięzłej formie.",
      price: 38.43,
      imageSource: "url",
      imageUrl: "/miniature2.webp",
      createdAt: "2024-12-29T19:17:08.913Z",
    },
    {
      id: "6771a032cc4238c8da4da781",
      updatedAt: "2024-12-29T19:17:06.107Z",
      type: "magazine",
      name: "Kazus Podatkowy 5(10)2019 2019",
      description:
        "Zapraszam Państwa do lektury kolejnego numeru „Kazusu Podatkowego”, w którym znalazły się 22 bardzo interesujące artykuły. Koniec roku to jak zwykle czas zmian w przepisach podatkowych. ",
      price: 30.79,
      imageSource: "url",
      imageUrl: "/miniature3.webp",
      createdAt: "2024-12-29T19:17:06.107Z",
    },
    {
      id: "6771a02dcc4238c8da4da773",
      updatedAt: "2024-12-29T19:17:01.444Z",
      type: "magazine",
      name: "Kazus Podatkowy 1(24)2022 2022",
      description:
        "Analiza kontrowersyjnych problemów, aktualna wiedza w zakresie bieżących zagadnień podatkowych, a wszystko prezentowane przez najlepszych autorów - praktyków i w zwięzłej formie.",
      price: 43.06,
      imageSource: "url",
      imageUrl: "/miniature1.webp",
      createdAt: "2024-12-29T19:17:01.444Z",
    },
    {
      id: "6771a029cc4238c8da4da765",
      updatedAt: "2024-12-29T19:16:57.795Z",
      type: "magazine",
      name: "Kazus Podatkowy 5(10)2019 2019",
      description:
        "Zapraszam Państwa do lektury kolejnego numeru „Kazusu Podatkowego”, w którym znalazły się 22 bardzo interesujące artykuły. Koniec roku to jak zwykle czas zmian w przepisach podatkowych. ",
      price: 30.79,
      imageSource: "url",
      imageUrl: "/miniature3.webp",
      createdAt: "2024-12-29T19:16:57.795Z",
    },
    {
      id: "6771a027cc4238c8da4da757",
      updatedAt: "2024-12-29T19:16:55.162Z",
      type: "magazine",
      name: "Kazus Podatkowy 5(22)2021 2021",
      description:
        "Analiza kontrowersyjnych problemów, aktualna wiedza w zakresie bieżących zagadnień podatkowych, a wszystko prezentowane przez najlepszych autorów - praktyków i w zwięzłej formie.",
      price: 38.43,
      imageSource: "url",
      imageUrl: "/miniature2.webp",
      createdAt: "2024-12-29T19:16:55.162Z",
    },
    {
      id: "6771a019cc4238c8da4da6f4",
      type: "magazine",
      name: "Kazus Podatkowy 5(10)2019 2019",
      description:
        "Zapraszam Państwa do lektury kolejnego numeru „Kazusu Podatkowego”, w którym znalazły się 22 bardzo interesujące artykuły. Koniec roku to jak zwykle czas zmian w przepisach podatkowych. ",
      price: 30.79,
      imageSource: "url",
      imageUrl: "/miniature3.webp",
      createdAt: "2024-12-29T19:16:41.418Z",
      updatedAt: "2024-12-29T19:16:41.418Z",
    },
    {
      id: "67719fc1cc4238c8da4da67b",
      updatedAt: "2024-12-29T19:15:47.409Z",
      type: "magazine",
      name: "Kazus Podatkowy 5(22)2021 2021",
      description:
        "Analiza kontrowersyjnych problemów, aktualna wiedza w zakresie bieżących zagadnień podatkowych, a wszystko prezentowane przez najlepszych autorów - praktyków i w zwięzłej formie.",
      price: 38.43,
      imageSource: "url",
      imageUrl: "/miniature2.webp",
      createdAt: "2024-12-29T19:15:13.456Z",
    },
  ],
  totalDocs: 8,
  limit: 8,
  totalPages: 1,
  page: 1,
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
};

const useMockedProductsApi = () => {
  const fetchProducts = async (
    page: number,
    type: "magazine" | "course" | "all" = "all",
    limit: number = 8
  ): Promise<Response<PaginatedData<ProductData>>> => {
    try {
      const { docs, ...restOfPayload } =
        demoData as PaginatedData<ProductPayload>;

      console.log("Requested resource: " + page, type, limit);

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
      const payload = demoData.docs.find(
        (item) => item.id == id
      ) as ProductPayload;
      if (!payload) throw new Error();
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

export { useMockedProductsApi };
