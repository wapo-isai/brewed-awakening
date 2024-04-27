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
      <div className={styles.purchaseArea}>
        <h3>{price}</h3>
        <button>
          <img src={Cart} />
          Add To Cart
        </button>
      </div>
      <div className={styles.imgWrapper}>
        <img src={source} />
      </div>

      <em>{calories} cals</em>
      <p>{description}</p>
    </div>
  );
}

export default MenuItemCard;
