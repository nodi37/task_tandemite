import { ImageData, ImagePayload } from "./shared.types";

const normalizeImagePayload = (image: ImagePayload): ImageData => {
  const { alt, url, width, height } = image;

  return {
    alt,
    src: url,
    width,
    height,
  };
};

export { normalizeImagePayload };
