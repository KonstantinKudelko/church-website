import styles from "./quote.module.css";

export const Quote = ({ color, quotes, children, authorName }) => {
  return (
    <section className={styles.quote}>
      <div
        style={{
          backgroundColor: `var(${color})`,
        }}
        className={styles.content}
      >
        {children}
        <div className={styles.quotes}>{quotes}</div>
        <strong className={styles.authorName}>{authorName}</strong>
      </div>
    </section>
  );
};
