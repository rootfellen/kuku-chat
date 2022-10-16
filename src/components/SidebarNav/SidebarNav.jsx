import React, { useContext } from "react";
import styles from "./SidebarNav.module.scss";
import logo from "../../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const SidebarNav = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Kuku Chat" />
      </div>
      <div className={styles.user}>
        <img className={styles.user_img} src={currentUser.photoURL} />
        {currentUser.displayName}
      </div>
      <button onClick={() => signOut(auth)} className={styles.user_btn}>
        Log out
      </button>
    </nav>
  );
};

export default SidebarNav;
