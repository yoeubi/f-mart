import { atom, selector } from "recoil";

interface Cart {
  merchandiseId: number;
  quantity: number;
}

export const cartsAtom = atom<Cart[]>({
  key: "cart",
  default: [],
});

export const filteredCart = selector({
  key: "filtedCart",
  get: ({ get }) => {
    const carts = get(cartsAtom);
  },
});
