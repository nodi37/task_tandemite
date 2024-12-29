import { normalizeImagePayload } from "../shared";
import { ProductData, ProductPayload } from "./products.types";

const normalizeProductPayload = (product: ProductPayload): ProductData => {
  const { id, type, name, description, price, imageSource } = product;
  const image =
    imageSource == "url"
      ? {
          src: product.imageUrl,
          alt: "miniature",
          height: 380,
          width: 326,
        }
      : normalizeImagePayload(product.image);

  return {
    id,
    type,
    name,
    description,
    price,
    image, // it should be just image: normalizeImagePayload(product.image); instead of the logic above but that's a mockup
  };
};

export { normalizeProductPayload };
