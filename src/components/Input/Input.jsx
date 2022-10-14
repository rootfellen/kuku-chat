import React from "react";
import styles from "./Input.module.scss";
import img from "../../assets/img.png";
import attach from "../../assets/attach.png";

const Input = () => {
  return (
    <div className={styles.messageInput}>
      <input type="text" placeholder="Type your message..." />
      <div className={styles.inputCta}>
        <img src={attach} alt="Attach" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="Image" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
