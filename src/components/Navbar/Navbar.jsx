import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLogged = false;
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Kuku Chat" />
        </Link>
        <div className={styles.toolbar}>
          <div className={styles.theme}>Dark / Light</div>
          {isLogged ? (
            <button className={styles.signout_btn}>Sign out</button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
