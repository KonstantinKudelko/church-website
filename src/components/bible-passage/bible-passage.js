import styles from "./bible-passage.module.css";

export const BiblePassage = ({ link, children }) => {
  return (
    <div className={styles.passage}>
      {children}
      <span className={styles.link}>{link}</span>
    </div>
  );
};
