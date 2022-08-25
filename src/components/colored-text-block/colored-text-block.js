import styles from "./colored-text-block.module.css";

export const ColoredTextBlock = ({ children, color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: `var(${color})` }}>
      {children}
    </div>
  );
};
