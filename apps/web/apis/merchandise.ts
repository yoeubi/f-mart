import { Axios, get } from ".";

export interface MerchandiseItem {
  id: number;
  storeId: number;
  categoryIds: number[];
  name: string;
  price: number;
  thumbnail: string;
}

export interface Merchandise {
  id: number;
  name: string;
  merchandises: MerchandiseItem[];
}

export async function getMerchandises(): Promise<Merchandise[]> {
  return Axios.get("/merchandise");
}

export async function getMerchandiseItem(id: number): Promise<MerchandiseItem> {
  return Axios.get(`/merchandise/${id}`);
}
