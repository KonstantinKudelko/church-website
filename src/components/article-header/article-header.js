import Link from "next/link";
import { localizeDateString } from "@helpers/localize-date-string";
import { Logo } from "@components/logo";
import { PATH_MAGAZINE } from "@constants";

import styles from "./article-header.module.css";

const ArticleBreadcrumbs = ({ articleName }) => {
  const divider = " / ";

  return (
    <p className={styles.breadcrumbs}>
      <Link href={PATH_MAGAZINE}>Главная</Link>
      {divider}
      <Link href={PATH_MAGAZINE}>Статьи</Link>
      {articleName && (
        <>
          {divider}
          <span>{articleName}</span>
        </>
      )}
    </p>
  );
};

export const ArticleHeader = ({ src, title, date, author, children }) => {
  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${src})`,
        }}
        className={styles.header}
      >
        <Link href={PATH_MAGAZINE}>
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
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
      <ArticleBreadcrumbs articleName={title} />
    </>
  );
};
