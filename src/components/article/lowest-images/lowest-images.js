import styles from "./lowest-images.module.css";

export const LowestImages = ({ roundedBorders, srcHands, altHands, srcEyes, altEyes }) => {
  return (
    <div className={styles.container}>
      <img src={srcEyes} alt={altEyes} className={styles.content}></img>
      <img
        src={srcHands}
        alt={altHands}
        className={styles.content}
        style={{
          borderRadius: `${roundedBorders}px`,
        }}
      ></img>
    </div>
  );
};
