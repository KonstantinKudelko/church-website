import styles from "./quote.module.css";

export const Quote = ({ color, children, authorName }) => {
  return (
    <div className={styles.container}>
      <section
        className={styles.quote}
        style={{
          backgroundColor: `var(${color})`,
        }}
      >
        {children}
        <strong className={styles.authorName}>{authorName}</strong>
      </section>
    </div>
  );
};
