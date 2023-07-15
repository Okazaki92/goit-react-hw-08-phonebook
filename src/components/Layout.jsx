import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <AppBar />
        <Outlet />
      </div>
    </div>
  );
};
