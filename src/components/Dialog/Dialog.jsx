import React from "react";
import styles from "./Dialog.module.scss";
import cam from "../../assets/cam.png";
import add from "../../assets/add.png";
import more from "../../assets/more.png";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

const Dialog = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.dialogNav}>
        <span>Jane</span>
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
