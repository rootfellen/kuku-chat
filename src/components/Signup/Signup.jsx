import React from "react";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import addAvatar from "../../assets/avatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    const storageRef = ref(storage, "images/rivers.jpg");

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
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
