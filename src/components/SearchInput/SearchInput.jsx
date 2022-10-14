import React from "react";
import styles from "./SearchInput.module.scss";
const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchForm}>
        <input type="text" placeholder="Find a user" />
      </div>
      <div className={styles.userChat}>
        <img className={styles.userChatImg} />
        <div className={styles.userChatInfo}>
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
