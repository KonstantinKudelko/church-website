import styles from "./bible-passage.module.css";

export const BibleVerse = ({ number, children }) => {
  return (
    <div className={styles.verse}>
      <span>{number}</span>
      {children}
    </div>
  );
};
