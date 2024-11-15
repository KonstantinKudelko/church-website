import { ArticleCard } from "@components/article-card";

import styles from "./articles.module.css";

export const Articles = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          title={article.title}
          author={article.author}
          color={article.color}
          tags={article.tags}
          link={article.slug}
        />
      ))}
    </div>
  );
};
