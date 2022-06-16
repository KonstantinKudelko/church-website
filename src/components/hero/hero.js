import { localizeDateString } from "@utils/localize-date-string";

import styles from "./hero.module.css";

export const Hero = ({ src, date, author, children }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${src})`,
      }}
      className={styles.hero}
    >
      <div className={styles.content}>
        <span className={styles.author}>{author}</span>
        {children}
        <span className={styles.date}>{localizeDateString(date)}</span>
      </div>
    </section>
  );
};
