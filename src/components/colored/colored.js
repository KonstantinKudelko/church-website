import styles from "./colored.module.css";

export const Colored = ({ children }) => {
  return <em className={styles.colored}>{children}</em>;
};
