import React from "react";
import Dialog from "../Dialog/Dialog";
import Sidebar from "../Siderbar/Sidebar";
import styles from "./Chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chat_wrapper}>
        <Sidebar />
        <Dialog />
      </div>
    </div>
  );
};

export default Chat;
