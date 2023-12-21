import Image from "next/image";
import styles from "./magazine-filter.module.css";

export const TagsList = ({ tags, addTag }) => {
  return (
    <ul
      className={styles.tagsList}
      onClick={(e) => e.stopPropagation()}
    >
      {tags?.map((tag) => (
        <li
          key={tag}
          className={styles.tagsListItem}
          onClick={() => addTag(tag)}
        >
          <Image
            src="/images/magazine/cross-icon.svg"
            alt="plus"
            width={23}
            height={23}
          />

          <div className={styles.tagsListItemName}>{tag}</div>
        </li>
      ))}
    </ul>
  );
};
