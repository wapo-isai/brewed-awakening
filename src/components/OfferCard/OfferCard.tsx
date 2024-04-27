import React from "react";
import styles from "./OfferCard.module.css";
import CoffeeOffer from "../../assets/coffee-offer.png";

function OfferCard() {
  return (
    <div className={styles.offerCardWrapper}>
      <img src={CoffeeOffer} />
      <p>Buy one get one 50% off</p>
      <button className={styles.specialButton}>Claim Offer</button>
    </div>
  );
}

export default OfferCard;
