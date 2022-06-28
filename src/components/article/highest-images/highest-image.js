import styles from "./highest-images.module.css";

export const HighestImages = ({ roundedBorders, srcHands, altHands, srcEyes, altEyes }) => {
  return (
    <div className={styles.container}>
      <img src={srcHands} alt={altHands} className={styles.content}></img>
      <img
        src={srcHands}
        alt={altHands}
        className={styles.content}
        style={{
          borderRadius: `0px 0px ${roundedBorders}px ${roundedBorders}px`,
        }}
      ></img>
    </div>
  );
};
