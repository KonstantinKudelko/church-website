import styles from "./unordered.module.css";

export const UnorderedList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};
