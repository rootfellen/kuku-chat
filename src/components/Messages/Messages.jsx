import React from "react";
import Message from "../Message/Message";
import styles from "./Messages.module.scss";

const Messages = () => {
  return (
    <div className={styles.wrapper}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
