import React from "react";
import styles from "./Homepage.module.css";
import Aside from "../../components/Aside/Aside";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import Search from "../../components/Search/Search";
import OfferCard from "../../components/OfferCard/OfferCard";
import VelvetItem from "../../assets/menu-items/velvet-mocha.webp";

function Homepage() {
  const [isOpenBars, setIsOpenBars] = React.useState(true);

  return (
    <div className={styles.mainGrid}>
      <div
        className={`${styles.overlay} ${
          isOpenBars ? "" : styles.overlayChange
        }`}
      ></div>
      <div
        className={`${styles.container} ${
          isOpenBars ? styles.menuBars : styles.change
        }`}
        onClick={() => {
          setIsOpenBars(!isOpenBars);
        }}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>

      <div
        className={`${styles.asideWrapper} ${
          isOpenBars ? "" : styles.asideWrapperAnimation
        }`}
      >
        <Aside />
      </div>

      <div className={styles.middle}>
        <Search />
        <OrdersTable />
        <div className={styles.specialtyCard}>
          <h3>Todays Special – only $6.99</h3>
          <img src={VelvetItem} />
          <span>
            <strong>Velvet Mocha</strong>
          </span>
          <span>170 cals</span>
          <p>A light roast coffee with citrusy and floral notes.</p>
        </div>
      </div>
      <div>
        <OfferCard />
      </div>
    </div>
  );
}

export default Homepage;
