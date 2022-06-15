import styles from "./quote.module.css";

export const Quote = ({ children }) => {
  return (
    <section className={styles.quote}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
