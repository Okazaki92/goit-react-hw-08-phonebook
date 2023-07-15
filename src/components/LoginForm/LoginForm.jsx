import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { login } from "../../redux/auth/authOperiatons";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Email
        <input className={styles.form__input} type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input className={styles.form__input} type="password" name="password" />
      </label>
      <button className={styles.form__button} type="submit">
        Log In
      </button>
    </form>
  );
};
