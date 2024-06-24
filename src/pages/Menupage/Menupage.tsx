import styles from "./Menupage.module.css";

import Aside from "../../components/Aside/Aside";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";
import {useQuery} from "@tanstack/react-query";
import {getDrinks} from "../../api/coffeeapi";

import {ProductResponse} from "../../types";

function Menupage() {
  const {data, isError, isLoading, isSuccess} = useQuery<
    ProductResponse[],
    Error
  >({
    queryKey: ["drinks"],
    queryFn: getDrinks,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (isError) {
    return <span>Error when fetching cars...</span>;
  } else if (isSuccess) {
    console.log(data);
    return (
      <div className={styles.menuGrid}>
        <Aside />
        <div>
          <h1>Menu items</h1>
          <div className={styles.menuItems}>
            {data.map((drink) => {
              return (
                <MenuItemCard
                  id={drink.id}
                  key={drink.productName + drink.id}
                  drinkName={drink.productName}
                  price={drink.productPrice as unknown as string}
                  calories={drink.productCalories}
                  description={drink.productDescription}
                  source={drink.imageUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Menupage;
