import React from "react";
import styles from "./Menupage.module.css";

import Aside from "../../components/Aside/Aside";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";

import {coffeeItems} from "../../coffee-items";

function Menupage() {
  return (
    <div className={styles.menuGrid}>
      {/* <div className={styles.asideWrapper}> */}
      <Aside />
      {/* </div> */}
      <div>
        <h1>Menu items</h1>
        <div className={styles.menuItems}>
          {coffeeItems.map((drink) => {
            return (
              <>
                <MenuItemCard
                  drinkName={drink.name}
                  price={drink.price}
                  calories={drink.calories}
                  description={drink.description}
                  source={drink.image}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menupage;
