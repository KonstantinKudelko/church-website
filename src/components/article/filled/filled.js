import styles from "./filled.module.css";

export const Filled = ({ children }) => {
  return <strong className={styles.content}>{children}</strong>;
};
