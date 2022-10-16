import React from "react";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import addAvatar from "../../assets/avatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;
    const storageRef = ref(storage, displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.login_wrapper}>
        <span className={styles.title}>kuku Chat</span>
        <span className={styles.subtitle}>Register</span>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img className={styles.addavatar_img} src={addAvatar} />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {error && <span>Something weng wrong...</span>}
        </form>
        <p className={styles.message}>
          Got an account?{" "}
          <Link className={styles.message_link} to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
