import { localizeDateString } from "@helpers/localize-date-string";

import styles from "./article-header.module.css";

export const ArticleHeader = ({ src, date, author, children }) => {
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
        <time
          dateTime={date}
          className={styles.date}
        >
          {localizeDateString(date)}
        </time>
      </div>
    </header>
  );
};
