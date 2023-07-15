import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
