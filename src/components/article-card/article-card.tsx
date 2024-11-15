import { useRouter } from "next/router";
import { getContrastTextColor, parseColor } from "@helpers/color.helpers";
import { localizeDateString } from "@helpers/localize-date-string";
import { getTimeToReadLabel } from "@helpers/get-time-to-read-label";
import { capitalizeTag } from "@helpers/capitalize-tag";

import styles from "./article-card.module.css";

export interface ArticleCardProps {
  date: string;
  minsToRead: number;
  title: string;
  author: string;
  color?: string;
  tags: string[];
  link: string;
}

export const ArticleCard = ({
  date,
  minsToRead,
  title,
  author,
  color,
  tags,
  link,
}: ArticleCardProps) => {
  const router = useRouter();

  const bgColor = parseColor(color);
  const contrastTextColor = getContrastTextColor(color);

  return (
    <article className={styles.container}>
      <div className={styles.metadata}>
        <time dateTime={date}>{localizeDateString(date)}</time>
        {minsToRead && <span>{getTimeToReadLabel(minsToRead)}</span>}
      </div>
      <div
        style={{ backgroundColor: bgColor, color: contrastTextColor }}
        className={styles.card}
        onClick={() => {
          router.push(link);
        }}
      >
        <h3 className={styles.title}>{title}</h3>
        <div
          style={{ backgroundColor: contrastTextColor }}
          className={styles.divider}
        />
        <span className={styles.author}>{author}</span>
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span
            key={tag}
            className={styles.tag}
          >
            {capitalizeTag(tag)}
          </span>
        ))}
      </div>
    </article>
  );
};
