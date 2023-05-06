import { MerchandiseItem } from "./merchandise";

function getCart() {
  return [{}];
}

interface Cart extends MerchandiseItem {
  quantity: number;
}

export async function postCart(cart: Cart) {}
