import styles from "./coloredTextBlock.module.css";

export const ColoredTextBlock = ({ children, color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: `var(${color})` }}>
      {children}
    </div>
  );
};
