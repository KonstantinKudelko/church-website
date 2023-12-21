import styles from "./magazine-filter.module.css";
import Image from "next/image";

export const FilterTags = ({ addedTags, deleteTag }) => {
  return (
    <>
      {addedTags.map((tag) => (
        <div
          key={tag}
          className={styles.tagItem}
        >
          <div className={styles.tagName}>{tag}</div>

          <Image
            src="/images/magazine/cross-icon.svg"
            alt="cross"
            width={23}
            height={23}
            onClick={() => deleteTag(tag)}
            className={styles.crossIcon}
          />
        </div>
      ))}
    </>
  );
};
