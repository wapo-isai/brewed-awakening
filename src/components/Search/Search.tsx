import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../assets/svgs/search.svg";

function Search() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" />
      <img src={SearchIcon} className={styles.searchIcon} />
      <button className={styles.searchButton}>Search</button>
    </div>
  );
}

export default Search;
