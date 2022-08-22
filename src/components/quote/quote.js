import styles from "./quote.module.css";

export const Quote = ({ author, children }) => {
  return (
    <div className={styles.container}>
      {children}
      <strong className={styles.author}>{author}</strong>
    </div>
  );
};
