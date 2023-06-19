import styles from "./article.module.css";

export const Articles = ({ articles }) => {
  return (
    <div className={styles.container}>
      <hr/>
      <div className={styles.filter}>
        <div>Все статьи</div>
        <div>&#43;</div>
      </div>

      <div className={styles.list}>
        {articles.map((article) => (
          <div key={article.slug}>

            <div className={styles.childData}>
              <div className={styles.childTitle}>{article.title}</div>
              <div className={styles.childPoint}>&#x2022;</div>
              <div className={styles.childAuthor}>{article.author}</div>
            </div>

            <div className={styles.childTags}>{article.tags.map((tag) => (
              <div >{tag}</div>
            ))}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
