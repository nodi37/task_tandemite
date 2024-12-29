// Paginated response
type NextPageData =
  | { hasNextPage: true; nextPage: number }
  | { hasNextPage: false; nextPage: null };

type PrevPageData =
  | { hasPrevPage: true; prevPage: number }
  | { hasPrevPage: false; prevPage: null };

export type PaginatedData<T> = {
  docs: Array<T>;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
} & NextPageData &
  PrevPageData;

// Unified response
export type Response<T> =
  | { success: false; data?: undefined; message?: string }
  | { success: true; data: T; message?: string };

// Payload entity
export type Entity<T> = {
  id: string;
  createdAt: string;
  updatedAt: string;
} & T;

// Media Image
export type ImagePayload = Entity<{
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  url: string;
  thumbnailURL: null;
}>;

export type ImageData = {
  alt: string;
  src: string;
  width: number;
  height: number;
};
