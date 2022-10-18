import React, { useContext, useEffect, useState } from "react";
import styles from "./Dialogs.module.scss";
import { onSnapshot, doc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";

const Dialogs = () => {
  const [dialogs, setDialogs] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getDialogs = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setDialogs(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getDialogs();
  }, [currentUser.uid]);
  console.log(dialogs);
  return (
    <div className={styles.wrapper}>
      {Object.entries(dialogs)?.map((dialog) => (
        <div className={styles.userChat} key={dialog[0]}>
          <img
            className={styles.userChatImg}
            src={dialog[1].userInfo.photoURL}
          />
          <div className={styles.userChatInfo}>
            <span>{dialog[1].userInfo.displayName}</span>
            <p>{dialog[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dialogs;
