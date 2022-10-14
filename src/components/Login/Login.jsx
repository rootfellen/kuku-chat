import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login_wrapper}>
        <span className={styles.title}>kuku Chat</span>
        <span className={styles.subtitle}>Login</span>
        <form className={styles.login_form}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p className={styles.message}>
          Haven't registered yet?{" "}
          <Link className={styles.message_link} to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
