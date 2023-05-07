import { MerchandiseItem, list } from "./merchandise";

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
  return [
    {
      id: 1,
      store: {
        id: 1,
        name: "abc",
      },
      merchandises: list.slice(0, 3).map((item) => ({ ...item, quantity: 1 })),
    },
  ];
}

interface PostCart {
  merchandiseId: number;
  quantity: number;
}

export async function postCart(cart: PostCart) {
  console.log("post");
}

export async function deleteCart(id: number | number[]) {
  console.log("delete");
}

export async function patchCart({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) {
  console.log("patch");
}
