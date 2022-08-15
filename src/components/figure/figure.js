import styles from "./figure.module.css";

export const Figure = ({ src, alt }) => {
  return (
    <figure className={styles.figure}>
      <img src={src} alt={alt} className={styles.img} />

      <figcaption className={styles.caption}>{alt}</figcaption>
    </figure>
  );
};
