import React from "react";
import Dialog from "../Dialog/Dialog";
import Sidebar from "../Siderbar/Sidebar";
import styles from "./Chat.module.scss";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

const Chat = () => {
  const messagesRef = doc(collection(db, "messages"));
  const messagesCollection = collection(db, "messages");
  const q = query(messagesCollection, orderBy("createdAt"));
  const [messages, loading, error] = useCollectionData(q);

  if (loading) {
    return (
      <div className={styles.loader}>
        <div className={styles.lds_hourglass}></div>
      </div>
    );
  }
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
