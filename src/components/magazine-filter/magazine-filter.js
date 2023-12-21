import Image from "next/image";
import styles from "./magazine-filter.module.css";
import { TagsList } from "./tags-list";
import { FilterTags } from "./filter-tags";
import { useCallback } from "react";
import { useOutsideClick } from "@helpers/outside-click.helper";

export const MagazineFilter = ({
  tags,
  addTag,
  setTags,
  addedTags,
  defaultTags,
  tagListOpen,
  setArticles,
  setAddedTags,
  setTagListOpen,
  articlesMetadata,
}) => {
  const deleteTag = (deletedTag) => {
    const updatedAddedTags = addedTags.filter((item) => item !== deletedTag);
    addedTags.length === 1
      ? setArticles(articlesMetadata)
      : setArticles(
          articlesMetadata.filter((item) =>
            item.tags.some((tag) => updatedAddedTags.includes(tag)),
          ),
        );
    setAddedTags(updatedAddedTags);
    setTags((tag) => [...tag, deletedTag]);
  };

  const clearFilter = () => {
    setAddedTags([]);
    setTags(defaultTags());
    setArticles(articlesMetadata);
  };

  const closeTagList = useCallback(() => setTagListOpen(false), []);
  const ref = useOutsideClick(closeTagList);

  return (
    <div className={styles.filter}>
      <div
        className={styles.filterItem}
        onClick={() => clearFilter()}
      >
        Все статьи
      </div>

      <FilterTags
        addedTags={addedTags}
        deleteTag={deleteTag}
      />

      <div onClick={() => setTagListOpen(true)}>
        <div className={styles.tagAddingContainer}>
          <Image
            src="/images/magazine/cross-icon.svg"
            alt="plus"
            width={23}
            height={23}
            className={styles.plusIcon}
          />

          {tagListOpen && (
            <TagsList
              ref={ref}
              tags={tags}
              addTag={addTag}
            />
          )}
        </div>
      </div>
    </div>
  );
};
