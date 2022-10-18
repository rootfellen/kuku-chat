import React, { useContext } from "react";
import styles from "./SearchInput.module.scss";
import { useState } from "react";
import { query, collection, where, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/index";
import { AuthContext } from "../../context/AuthContext";
const SearchInput = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDocs(db, "chats", combinedId);
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }
    } catch (error) {}
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchForm}>
        <input
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Find a user"
        />
      </div>
      {error && <span>User not found!</span>}
      {user && (
        <div className={styles.userChat} onClick={handleSelect}>
          <img
            src={user.photoURL}
            className={styles.userChatImg}
            alt="profileImg"
          />
          <div className={styles.userChatInfo}>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
