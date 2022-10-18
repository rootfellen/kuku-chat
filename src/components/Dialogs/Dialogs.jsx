import React, { useContext, useEffect, useState } from "react";
import styles from "./Dialogs.module.scss";
import { onSnapshot, doc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { DialogContext } from "../../context/DialogContext";
import { db } from "../../firebase";

const Dialogs = () => {
  const [dialogs, setDialogs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(DialogContext);

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

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };
  return (
    <div className={styles.wrapper}>
      {Object.entries(dialogs)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((dialog) => (
          <div
            className={styles.userChat}
            key={dialog[0]}
            onClick={() => handleSelect(dialog[1].userInfo)}
          >
            <img
              className={styles.userChatImg}
              src={dialog[1].userInfo.photoURL}
            />
            <div className={styles.userChatInfo}>
              <span>{dialog[1].userInfo.displayName}</span>
              <p>{dialog[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dialogs;
