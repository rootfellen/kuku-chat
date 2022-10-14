import React from "react";
import styles from "./Message.module.scss";

const Message = () => {
  const user = true;
  return (
    <div className={user ? styles.wrapper : styles.wrapper2}>
      <div className={styles.info}>
        <img />
        <span>just now</span>
      </div>
      <div className={styles.content}>
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
      </div>
    </div>
  );
};

export default Message;
