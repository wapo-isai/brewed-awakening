import React from "react";
import styles from "./MenuItemCard.module.css";
import Cart from "../../assets/svgs/cart.svg";

type Props = {
  drinkName: string;
  price: string;
  calories: number;
  description: string;
  source: string;
};

function MenuItemCard({
  drinkName,
  price,
  calories,
  description,
  source,
}: Props) {
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
        <button>
          <img src={Cart} />
          Add To Cart
        </button>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default MenuItemCard;
