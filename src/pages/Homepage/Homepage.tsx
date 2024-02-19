import React from "react";
import styles from "./Homepage.module.css";
import Aside from "../../components/Aside/Aside";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import Search from "../../components/Search/Search";

function Homepage() {
  return (
    <div className={styles.mainGrid}>
      <Aside />
      <div>
        <Search />
        <OrdersTable />
      </div>
      <p>Extra Stuff</p>
    </div>
  );
}

export default Homepage;
