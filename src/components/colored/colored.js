import styles from "./colored.module.css";

export const Colored = ({ children, color }) => {
  return (
    <em
      style={{
        color: `var(${color})`,
      }}
      className={styles.colored}
    >
      {children}
    </em>
  );
};
