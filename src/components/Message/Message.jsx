import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DialogContext } from "../../context/DialogContext";
import styles from "./Message.module.scss";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(DialogContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={
        message.senderId === currentUser.uid ? styles.wrapper2 : styles.wrapper
      }
    >
      <div className={styles.info}>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        />
        <span>just now</span>
      </div>
      <div className={styles.content}>
        {message.text && <p>{message.text}</p>}
        {message.img && <img src={message.img} />}
      </div>
    </div>
  );
};

export default Message;
