import { localizeDateString } from "@utils/localize-date-string";

import styles from "./header.module.css";

export const Header = ({ src, date, author, children }) => {
  return (
    <header
      style={{
        backgroundImage: `url(${src})`,
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
