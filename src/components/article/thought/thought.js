import styles from "./thought.module.css";

export const Thought = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
