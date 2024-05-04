import {CartItem} from "../features/cart/cartSlice";

export function getCartStateFromCache(tempCartItems: any[]) {
  let tempCheckoutItems: Array<CartItem> = [];
  const counts = {};
  tempCartItems.forEach(function (x) {
    // @ts-ignore
    counts[x] = (counts[x] || 0) + 1;
  });

  for (const [key, value] of Object.entries(counts)) {
    tempCheckoutItems.push({
      id: Number(key),
      amount: Number(value),
    });
  }

  return tempCheckoutItems;
}
