import styles from "./verse.module.css";

export const Verse = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
