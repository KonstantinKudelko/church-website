import styles from "./highlightedTextBlock.module.css";

export const HighlightedTextBlock = ({ children, color }) => {
  return (
    <strong className={styles.content} style={{ backgroundColor: `var(${color})` }}>
      {children}
    </strong>
  );
};
