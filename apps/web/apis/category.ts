import { get } from ".";

export interface Category {
  id: number;
  thumbnail: string;
  name: string;
}

export function getCategories() {
  return get("/categories");
}
