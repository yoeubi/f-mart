import { atom } from "recoil";

interface Cart {
  merchandiseId: number;
  quantity: number;
}

export const carts = atom<Cart[]>({
  key: "cart",
  default: [],
});
