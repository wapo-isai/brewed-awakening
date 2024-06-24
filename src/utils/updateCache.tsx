import {CartItem} from "../features/cart/cartSlice";
import {UserResponse} from "../features/users/userSlice";

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

export function updateUserCache(userId: string, username: string) {
  let user: UserResponse = {
    userId: userId,
    username: username,
  };
  localStorage.setItem("user", JSON.stringify(user));
}
