import {CartItem} from "../features/cart/cartSlice";

export function updateCache(items: Array<CartItem>) {
  let newArr = [];
  for (let index = 0; index < items.length; index++) {
    for (
      let amountidx = 0;
      amountidx < Number(items[index].amount);
      amountidx++
    ) {
      newArr.push(items[index]["id"]);
    }
  }
  localStorage.setItem("cartItems", JSON.stringify(newArr));
}
