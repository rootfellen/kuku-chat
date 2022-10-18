import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { DialogContext } from "../../context/DialogContext";
import { db } from "../../firebase";
import Message from "../Message/Message";
import styles from "./Messages.module.scss";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(DialogContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className={styles.wrapper}>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
