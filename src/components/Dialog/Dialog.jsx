import React, { useContext } from "react";
import styles from "./Dialog.module.scss";
import cam from "../../assets/cam.png";
import add from "../../assets/add.png";
import more from "../../assets/more.png";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import { DialogContext } from "../../context/DialogContext";

const Dialog = () => {
  const { data } = useContext(DialogContext);
  return (
    <div className={styles.wrapper}>
      <nav className={styles.dialogNav}>
        <span>{data.user?.displayName}</span>
        <div className={styles.cta}>
          <img src={cam} alt="Video Call" />
          <img src={add} alt="Add friend" />
          <img src={more} alt="More" />
        </div>
      </nav>
      <Messages />
      <Input />
    </div>
  );
};

export default Dialog;
