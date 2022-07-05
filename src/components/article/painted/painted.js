import styles from "./painted.module.css";

export const Painted = ({ children, color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: `var(${color})` }}>
      {children}
    </div>
  );
};
