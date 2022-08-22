export const HighlightedTextBlock = ({ children, color }) => {
  return <strong style={{ backgroundColor: `var(${color})` }}>{children}</strong>;
};
