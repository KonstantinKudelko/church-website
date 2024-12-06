import { useRouter } from "next/router";
import { localizeDateString } from "@helpers/localize-date-string";
import { Logo } from "@components/logo";
import { PATH_MAGAZINE } from "@constants";

import styles from "./article-header.module.css";

export const ArticleHeader = ({ src, date, author, children }) => {
  const router = useRouter();

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${src})`,
      }}
      className={styles.header}
    >
      <div
        className={styles.logo}
        onClick={() => router.push(PATH_MAGAZINE)}
      >
        <Logo />
      </div>
      <div className={styles.wrapper}>
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
      </div>
    </header>
  );
};
