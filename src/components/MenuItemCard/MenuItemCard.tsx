import styles from "./MenuItemCard.module.css";
import Cart from "../../assets/svgs/cart.svg";

import {useDispatch} from "react-redux";
import {setCart} from "../../features/cart/cartSlice";

type Props = {
  id: number;
  drinkName: string;
  price: string;
  calories: number;
  description: string;
  source: string;
};

function MenuItemCard({
  id,
  drinkName,
  price,
  calories,
  description,
  source,
}: Props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.itemWrapper}>
      <span>
        <strong>{drinkName}</strong>
      </span>
      <h3>{price}</h3>

      <div className={styles.imgWrapper}>
        <img src={source} />
      </div>

      <div className={styles.purchaseArea}>
        <em>{calories} cals</em>
        <button
          onClick={() => {
            let tempArray: any[] = [];
            if (localStorage.getItem("cartItems")) {
              // @ts-ignore
              tempArray = JSON.parse(localStorage.getItem("cartItems"));
            }
            tempArray = [...tempArray, id];

            dispatch(setCart([...tempArray]));

            localStorage.setItem("cartItems", JSON.stringify(tempArray));
          }}
        >
          <img src={Cart} />
          Add To Cart
        </button>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default MenuItemCard;
