import styles from "./subscription-form.module.css";

export const SubscriptionForm = () => {
  return (
    <div className={styles.container}>
      <span className={styles.description}>Подпишись на новые статьи</span>

      <form className={styles.form}>
        <input className={styles.name} name="name" type="name" placeholder="Имя" />

        <input className={styles.email} name="email" type="email" placeholder="E-mail" />

        <button className={styles.submit} type="submit">
          Подписаться
          <img src="/images/magazine/icon-right-outline.svg" />
        </button>
      </form>
    </div>
  );
};
