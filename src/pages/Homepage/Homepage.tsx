import React from "react";
import styles from "./Homepage.module.css";
import Aside from "../../components/Aside/Aside";

function Homepage() {
  return (
    <div className={styles.mainGrid}>
      <Aside />
      <p>Let's code!</p>
      <p>Extra Stuff</p>
    </div>
  );
}

export default Homepage;
