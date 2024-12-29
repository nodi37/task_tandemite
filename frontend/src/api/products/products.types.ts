import { Entity, ImageData, ImagePayload } from "../shared";

type WithImageUrl = {
  imageSource: "url";
  imageUrl: string;
};

type WithImageFile = {
  imageSource: "file";
  image: ImagePayload;
};

type ImageOptions = WithImageUrl | WithImageFile;

export type ProductPayload = Entity<
  {
    type: "magazine" | "course";
    name: string;
    description: string;
    price: number;
  } & ImageOptions
>;

export type ProductData = {
  id: string;
  type: "magazine" | "course";
  name: string;
  description: string;
  price: number;
  image: ImageData;
};
