import { useState } from "react";
import { Spinner } from "./spinner";

import styles from "./subscription-form.module.css";

export const SubscriptionForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const token = `Bearer ${localStorage.getItem("token")}`;
    fetch(`https://api.sendpulse.com/addressbooks/`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then(async (response) => {
        const json = await response.json();
        return json[0].id;
      })
      .then(async (bookId) => {
        const body = new FormData();
        body.append("id", bookId);
        body.append(
          "emails",
          JSON.stringify([
            {
              email: event.target.email.value,
              variables: {
                name: event.target.name.value,
              },
            },
          ]),
        );
        const response = await fetch(`https://api.sendpulse.com/addressbooks/${bookId}/emails`, {
          method: "POST",
          body,
          headers: {
            Authorization: token,
          },
        });

        if (response.ok) {
          setLoading(false);
          setSuccess(true);
        }
      });
  };

  if (isSuccess) {
    return (
      <div className={`${styles.container} ${styles.success}`}>
        <span className={styles.header}>Поздравляем с подпиской!</span>

        <span className={styles.description}>
          Мы молимся и верим, что наш ресурс поможет вам возрастать в христианской вере!
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.header}>Подпишись на наш ресурс</span>

      <span className={styles.description}>
        Мы создаём основанный на Евангелии контент, который трансформирует жизнь христианина и
        побуждает его благовествовать окружающим.
      </span>

      <span className={styles.description}>
        Никакого спама. В любой момент вы можете отписаться от нашей рассылки.
      </span>

      <form className={styles.form} onSubmit={onSubmitForm}>
        <input
          name="name"
          type="name"
          disabled={isLoading}
          className={styles.name}
          placeholder="Имя"
        />

        <input
          name="email"
          type="email"
          required
          disabled={isLoading}
          className={styles.email}
          placeholder="E-mail"
        />

        <button className={styles.submit} type="submit" disabled={isLoading}>
          {!isLoading ? "Подписаться" : <Spinner />}
        </button>
      </form>
    </div>
  );
};
