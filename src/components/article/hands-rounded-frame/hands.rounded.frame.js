import styles from "/hands.rounded.frame.module.css";

export const HandsRoundedFrame = ({ src }) => {
  return (
    <div className={styles.container}>
      <img 
      style={{
        backgroundImage=`(url${src})`
      }}
      className={styles.content}></img>
    </div>
  );
};
