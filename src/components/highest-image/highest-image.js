import styles from "./highest-image.module.css";

export const HighestImage = ({ isSemicircular, src }) => {
  return (
    <div className={styles.container}>
      <img
        src={src}
        alt="highest-article-image"
        className={styles.content}
        style={{
          borderRadius: isSemicircular ? "0px 0px 300px 300px" : "0px",
        }}
      ></img>
    </div>
  );
};
