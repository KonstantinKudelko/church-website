import styles from "./subscription-form.module.css";

export const SubscriptionForm = () => {
  const onSubmitForm = (event) => {
    event.preventDefault();

    console.log(event.target.name.value, event.target.email.value);
  };

  return (
    <div className={styles.container}>
      <span className={styles.description}>Подпишись на новые статьи</span>

      <form className={styles.form} onSubmit={onSubmitForm}>
        <input className={styles.name} name="name" type="name" placeholder="Имя" />

        <input className={styles.email} name="email" type="email" placeholder="E-mail" required />

        <button className={styles.submit} type="submit">
          Подписаться
        </button>
      </form>
    </div>
  );
};
