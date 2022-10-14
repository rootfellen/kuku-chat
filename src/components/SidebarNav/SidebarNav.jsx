import React from "react";
import styles from "./SidebarNav.module.scss";
import logo from "../../assets/logo.png";

const SidebarNav = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Kuku Chat" />
      </div>
      <div className={styles.user}>
        <img className={styles.user_img} />
        John Snow
      </div>
      <button className={styles.user_btn}>Log out</button>
    </nav>
  );
};

export default SidebarNav;
