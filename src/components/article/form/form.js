import styles from "./form.module.css";

export const Form = ({ children }) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{children}</p>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <input className={styles.name} name="name" type="name" placeholder="Имя" />
        </div>
        <div className={styles.inputContainer}>
          <input className={styles.email} name="email" type="email" placeholder="E-mail" />
        </div>
        <button className={styles.submit} type="submit">
          Подписаться &#62;
        </button>
      </form>
    </div>
  );
};
