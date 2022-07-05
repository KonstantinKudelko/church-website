import styles from "./filled.module.css";

export const Filled = ({ children, color }) => {
  return (
    <strong className={styles.content} style={{ backgroundColor: `var(${color})` }}>
      {children}
    </strong>
  );
};
