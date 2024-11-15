import { useRouter } from "next/router";

import styles from "./article-card.module.css";

export interface ArticleCardProps {
  title: string;
  author: string;
  color?: string;
  tags: string[];
  link: string;
}

export const ArticleCard = ({ title, author, color, tags, link }: ArticleCardProps) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundColor: color }}
        className={styles.card}
        onClick={() => {
          router.push(link);
        }}
      >
        <span className={styles.title}>{title}</span>
        <div className={styles.divider} />
        <span className={styles.author}>{author}</span>
      </div>
    </div>
  );
};
