import { localizeDateString } from "@utils/localize-date-string";

import styles from "./header.module.css";

export const Header = ({ src, date, author, children }) => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${src})`,
      }}
      className={styles.header}
    >
      <div className={styles.content}>
        <span className={styles.author}>{author}</span>
        {children}
        <span className={styles.date}>{localizeDateString(date)}</span>
      </div>
    </header>
  );
};
