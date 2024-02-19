import React from "react";
import styles from "./Aside.module.css";
import Coffee from "../../assets/svgs/coffee.svg";
import Users from "../../assets/svgs/2users.svg";
import Gear from "../../assets/svgs/gear.svg";
import Location from "../../assets/svgs/location.svg";
import Navigate from "../../assets/svgs/navigate.svg";
import Logo from "../../assets/coffee-logo.png";

function Aside() {
  return (
    <div className={styles.containerMain}>
      <span className={styles.logoSection}>
        <img src={Logo} className={styles.logo} />
        <p>Brewed-Awakening</p>
      </span>
      <nav className={styles.navList}>
        <a href="#">
          <img src={Gear} alt="gear icon" />
          Dashboard
        </a>
        <a href="#">
          <img src={Coffee} alt="coffee icon" /> Orders
        </a>
        <a href="#">
          <img src={Location} alt="location icon" />
          Restaurants
        </a>
        <a href="#">
          <img src={Users} alt="users icon" />
          Drivers
        </a>
      </nav>

      <p>Done for the day?</p>
      <button className={styles.specialButton}>
        <img src={Navigate} />
        Send Daily Report
      </button>

      <p>Isai Martinez</p>
    </div>
  );
}

export default Aside;
