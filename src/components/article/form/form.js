import React, { useState } from "react";
import styles from "./form.module.css";

export const Form = ({ children }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value.trim());
    setValue({
      ...value,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>{children}</p>
      <form className={styles.form}>
        <input
          className={styles.name}
          type="name"
          placeholder="Имя"
          value={value.name}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          className={styles.email}
          type="email"
          placeholder="E-mail"
          value={value.email}
          onChange={(e) => handleChange(e)}
        ></input>
        <button className={styles.submit} type="submit" onClick={(e) => handleSubmit(e)}>
          Подписаться &#62;
        </button>
      </form>
    </div>
  );
};
