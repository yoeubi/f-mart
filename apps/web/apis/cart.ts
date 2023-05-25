import { Axios } from ".";
import { MerchandiseItem } from "./merchandise";

interface Store {
  id: number;
  name: string;
}

export interface Cart extends MerchandiseItem {
  quantity: number;
}

export interface GetCart {
  id: number;
  store: Store;
  merchandises: Cart[];
}

export async function getCart(): Promise<GetCart[]> {
  return Axios.get("/cart");
}

interface PostCart {
  merchandiseId: number;
  quantity: number;
}

export async function postCart(cart: PostCart) {
  return Axios.post("/cart", cart);
}

export async function deleteCart(id: number | number[]) {
  return Axios.delete(`/cart/${id}`);
}

export async function patchCart({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) {
  return Axios.patch(`/cart/${id}`, quantity);
}
