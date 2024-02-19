import React from "react";
import styles from "./OrdersTable.module.css";

function OrdersTable() {
  return (
    <div className={styles.ordersContainer}>
      <h3>Orders</h3>

      <table className={styles.orderTable}>
        <thead>
          <tr>
            <th>Restuarant</th>
            <th>Order</th>
            <th>Value</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mackay St</td>
            <td>Coffee 1</td>
            <td>$35</td>
            <td>02:03</td>
          </tr>
          <tr>
            <td>Greenside St</td>
            <td>Coffee 2</td>
            <td>$40</td>
            <td>04:12</td>
          </tr>
          <tr>
            <td>Houston St</td>
            <td>Coffee 3</td>
            <td>$25</td>
            <td>07:59</td>
          </tr>
          <tr>
            <td>Mackay St</td>
            <td>Coffee 4</td>
            <td>$40</td>
            <td>10:00</td>
          </tr>
          <tr>
            <td>Greenside St</td>
            <td>Coffee 5</td>
            <td>$30</td>
            <td>12:22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
