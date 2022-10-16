import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.login_wrapper}>
        <span className={styles.title}>kuku Chat</span>
        <span className={styles.subtitle}>Login</span>
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {error && (
            <span style={{ color: "red" }}>Something weng wrong...</span>
          )}
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
