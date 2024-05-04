import React from "react";
import styles from "./CheckoutPage.module.css";
import type {RootState} from "../../app/store";
import {useSelector} from "react-redux";
import {coffeeItems} from "../../coffee-items";
import {increment, decrement, removeItem} from "../../features/cart/cartSlice";
import {useDispatch} from "react-redux";
import Logo from "../../assets/coffee-logo.png";
import ChevronLeft from "../../assets/svgs/chevron-left.svg";
import {useNavigate} from "react-router-dom";

function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    let tempTotal = 0;
    cartItems.forEach((item) => {
      tempTotal +=
        Number(
          coffeeItems.find(
            (coffeeDrink) => Number(coffeeDrink.id) == Number(item.id)
          )?.price
        ) * item.amount;
    });

    setTotalPrice(tempTotal);
  }, [cartItems]);

  console.log(cartItems);

  return (
    <>
      <div>
        <div className={styles.logoArea}>
          <div className={styles.flexContainer}>
            <button onClick={() => navigate(-1)}>
              <img src={ChevronLeft} />
            </button>
            <img src={Logo} />
          </div>
          <h1>My Shopping</h1>
        </div>
        {cartItems.map((cartItem) => {
          let coffeeDrink = coffeeItems.find(
            (coffeeItem) => coffeeItem.id == Number(cartItem.id)
          );

          return (
            <div className={styles.checkoutItem} key={cartItem.id}>
              <div className={styles.mainFlexContainer}>
                <div className={styles.imgContainer}>
                  <img src={coffeeDrink?.image} />
                </div>
                <div className={styles.descriptionArea}>
                  <span>
                    <strong>{coffeeDrink?.name}</strong>
                  </span>
                  <p>{coffeeDrink?.description}</p>
                </div>
                <div className={styles.priceArea}>
                  <span>Price: </span>
                  <span>${coffeeDrink?.price}</span>
                  <div className={styles.buttonArea}>
                    <span>{cartItem.amount}</span>
                    <button
                      onClick={() => {
                        if (Number(cartItem.amount) <= 1) {
                          dispatch(removeItem(cartItem));
                        } else {
                          dispatch(decrement(cartItem.id));
                        }
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        dispatch(increment(cartItem.id));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.totalPrice}>
          <h3>Total Price ${totalPrice}</h3>
          <button className={styles.specialButton}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
