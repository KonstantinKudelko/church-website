import styles from "./magazine-card.module.css";
import { useRouter } from "next/router";

export const MagazineCard = ({ addTag, article }) => {
  const router = useRouter();

  return (
    <article key={article.slug}>
      <div
        className={styles.cell}
        onClick={() => router.push(article.slug)}
        style={{
          backgroundColor: `var(${article.cardBackgroundColor})`,
          color: `var(${article.cardTextColor})`,
        }}
      >
        <h2 className={styles.cellTitle}>{article.title}</h2>

        <div className={styles.cellDelimiter}>
          <div>&#x2022;</div>
        </div>

        <div className={styles.cellAuthor}>{article.author}</div>
      </div>

      <div className={styles.tagsList}>
        {article.tags.map((tag) => (
          <div
            key={tag}
            onClick={() => addTag(tag)}
            className={styles.tagItem}
          >
            {tag}
          </div>
        ))}
      </div>
    </article>
  );
};
