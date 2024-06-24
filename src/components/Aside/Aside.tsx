import React from "react";
import styles from "./Aside.module.css";
import Coffee from "../../assets/svgs/coffee.svg";
import Users from "../../assets/svgs/2users.svg";
import Gear from "../../assets/svgs/gear.svg";
import Location from "../../assets/svgs/location.svg";
import Navigate from "../../assets/svgs/navigate.svg";
import Logo from "../../assets/coffee-logo.png";
import Cart from "../../assets/svgs/cart-2.svg";
import {Link} from "react-router-dom";
import type {RootState} from "../../app/store";
import {useSelector} from "react-redux";

import {AuthContext} from "../../App";

function Aside() {
  const authContext = React.useContext(AuthContext);

  const [isOpenBars, setIsOpenBars] = React.useState(true);

  const cartItems = useSelector((state: RootState) => state.cart.value);

  const userState = useSelector((state: RootState) => state.user.userState);

  return (
    <>
      <div
        className={`${styles.asideWrapper} ${
          isOpenBars ? "" : styles.asideWrapperAnimation
        }`}
      >
        <div className={styles.containerMain}>
          <span className={styles.logoSection}>
            <img src={Logo} className={styles.logo} />
            <p>Brewed-Awakening</p>
          </span>
          <nav className={styles.navList}>
            <Link to="/">
              <img src={Gear} alt="gear icon" />
              Home
            </Link>
            <Link to="/orders">
              <img src={Coffee} alt="coffee icon" />
              Orders
            </Link>
            <Link to="/menu">
              <img src={Location} alt="location icon" />
              Menu
            </Link>
            <Link to="/about-us">
              <img src={Users} alt="users icon" />
              About Us
            </Link>
          </nav>

          <div className={styles.logoffArea}>
            <Link className={styles.cartArea} to="/checkout">
              <img src={Cart} />
              <span>{cartItems ? cartItems.length : 0}</span>
            </Link>
            <p>Done for the day?</p>
            <button
              className={styles.specialButton}
              onClick={() => {
                sessionStorage.removeItem("jwt");
                authContext?.setIsAuthenticated(false);
              }}
            >
              <img src={Navigate} />
              Logout
            </button>

            <p>{userState.username ? userState.username : ""}</p>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Aside;
