import styles from "./quote.module.css";

export const Quote = ({ bcgColor, textColor, children, authorName }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: `var(${bcgColor})`,
        color: `var(${textColor})`,
      }}
    >
      {children}
      <strong className={styles.authorName}>{authorName}</strong>
    </div>
  );
};
