import styles from "../highlighted/highlighted.module.css";

export const Highlighted = ({ children, color }) => {
  return (
    <em
      style={{
        boxShadow: `10px 0 0px 0px var(${color}), -10px 0 0px 0px var(${color})`,
        backgroundColor: `var(${color})`,
      }}
      className={styles.highlighted}
    >
      {children}
    </em>
  );
};
