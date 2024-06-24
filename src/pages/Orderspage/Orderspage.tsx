import React from "react";
import styles from "./Orderspage.module.css";
import Aside from "../../components/Aside/Aside";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import type {RootState} from "../../app/store";
import {useSelector} from "react-redux";

function Orderspage() {
  const [progress, setProgress] = React.useState(0);

  const userState = useSelector((state: RootState) => state.user.userState);

  React.useEffect(() => {
    setProgress(userState.orders?.length || 0);
  });

  const total = 20;

  return (
    <div className={styles.ordersGrid}>
      <Aside />
      <div className={styles.ordersMain}>
        <div className={styles.progressBarArea}>
          <h4>Free Drink</h4>
          <p>
            Order <strong>{total - progress}</strong> more drinks and earn a
            free drink of your choice!
          </p>

          <p className={styles.totalDrinks}>
            {progress} / {total}
          </p>
          <div className={styles.progressBar}>
            <div
              style={{
                width: `${(progress / total) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className={styles.ordersTableArea}>
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}

export default Orderspage;
