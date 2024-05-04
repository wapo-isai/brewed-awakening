import React from "react";
import styles from "./Homepage.module.css";
import Aside from "../../components/Aside/Aside";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
// import Search from "../../components/Search/Search";
import OfferCard from "../../components/OfferCard/OfferCard";
import VelvetItem from "../../assets/menu-items/velvet-mocha.webp";

function Homepage() {
  return (
    <div className={styles.mainGrid}>
      <Aside />

      <div className={styles.middle}>
        {/* <Search /> */}
        <OrdersTable />
        <div className={styles.specialtyCard}>
          <h3>Todays Special – only $6.99</h3>
          <div className={styles.imgContainer}>
            <img src={VelvetItem} />
          </div>
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
