import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarNav from "../SidebarNav/SidebarNav";
import SearchInput from "../SearchInput/SearchInput";
import Dialogs from "../Dialogs/Dialogs";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarNav />
      <SearchInput />
      <Dialogs />
    </aside>
  );
};

export default Sidebar;
