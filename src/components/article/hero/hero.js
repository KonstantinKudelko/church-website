import styles from "../hero/hero.module.css";

export const Hero = ({ src, children }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${src})`,
      }}
      className={styles.hero}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
};
