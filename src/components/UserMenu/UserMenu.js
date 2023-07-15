import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperiatons";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Welcome, {user.name}</p>
      <button
        className={styles.logout_button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
