import React from "react";
import styles from "./Dialogs.module.scss";

const Dialogs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userChat}>
        <img className={styles.userChatImg} />
        <div className={styles.userChatInfo}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.userChat}>
        <img className={styles.userChatImg} />
        <div className={styles.userChatInfo}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
