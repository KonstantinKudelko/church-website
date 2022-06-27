import styles from "./hands.rounded.corners.module.css";

export const HandsRoundedCorners = ({ src }) => {
  return (
    <div className={styles.container}>
      <img
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={styles.character}
      ></img>
    </div>
  );
};
