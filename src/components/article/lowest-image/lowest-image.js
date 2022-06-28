import styles from "./lowest-image.module.css";

export const LowestImage = ({ isRounded, src }) => {
  return (
    <div className={styles.container}>
      <img
        src={src}
        alt="lowest-article-image"
        className={styles.content}
        style={{
          borderRadius: isRounded ? "35px" : "0px",
        }}
      ></img>
    </div>
  );
};
