import React from "react";
import styles from "./OfferCard.module.css";
import CoffeeOffer from "../../assets/coffee-offer-2.png";

function OfferCard() {
  return (
    <div className={styles.offerCardWrapper}>
      <div className={styles.coffeOfferImgContainer}>
        <img src={CoffeeOffer} />
      </div>
      <div className={styles.offerContent}>
        <p>Buy one get one 50% off</p>
        <button className={styles.specialButton}>Claim Offer</button>
      </div>
    </div>
  );
}

export default OfferCard;
