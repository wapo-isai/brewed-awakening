import React from "react";
import styles from "./OrdersTable.module.css";
import axios from "axios";

import type {RootState} from "../../app/store";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setUserState} from "../../features/users/userSlice";
import {UserResponse} from "../../features/users/userSlice";

function OrdersTable() {
  const userState = useSelector((state: RootState) => state.user.userState);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const jwtToken: string | null = sessionStorage.getItem("jwt");

    axios
      .get(
        import.meta.env.VITE_USERS_API_URL +
          `/${userState.userId}` +
          "?fields=orders",
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`,
          },
        }
      )
      .then((res) => {
        const userInfo: UserResponse = {
          userId: res.data.userId,
          username: res.data.username,
          orders: res.data.orders,
        };

        dispatch(setUserState(userInfo));
      });
  });

  return (
    <div className={styles.ordersContainer}>
      <h2>Orders</h2>

      <table className={styles.orderTable}>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Product IDs</th>
          </tr>
        </thead>
        <tbody>
          {userState.orders?.length
            ? userState.orders?.map((val, indx) => {
                return (
                  <tr key={indx}>
                    <td>{val.orderNumber.toString().slice(0, 8)}</td>
                    <td>
                      {val.productIds.map((id, ind) => {
                        if (ind != val.productIds.length - 1) {
                          return <span key={ind}>{id + ", "}</span>;
                        } else {
                          return <span key={ind}>{id}</span>;
                        }
                      })}
                    </td>
                  </tr>
                );
              })
            : "You have not made any orders yet"}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
