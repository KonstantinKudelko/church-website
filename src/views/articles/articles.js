import styles from "./articles.module.css";

import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useOutsideClick } from "@helpers/outside-click.helper";

export const Articles = ({ articlesMetadata }) => {
  const [articles, setArticles] = useState(articlesMetadata);
  const [tagListOpen, setTagListOpen] = useState(false);
  const [addedTags, setAddedTags] = useState([]);
  const router = useRouter();

  const setDefaultTags = () => {
    return [...new Set(articlesMetadata.flatMap((article) => article.tags))];
  };

  const [tags, setTags] = useState(setDefaultTags());

  const addTag = (tag) => {
    window.moveTo(0, 0);
    addedTags.includes(tag) ? null : setAddedTags((addTag) => [...addTag, tag]);
    setTagListOpen(false);
    setTags(tags.filter((item) => item !== tag));
    setArticles(articles.filter((article) => article.tags.includes(tag)));
  };

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
    setArticles(articlesMetadata);
    setAddedTags([]);
    setTags(setDefaultTags());
  };

  const closeTagList = useCallback(() => setTagListOpen(false), []);
  const ref = useOutsideClick(closeTagList);

  const goToArticle = (slug) => {
    router.push(slug);
  };

  return (
    <main>
      <div className={styles.logo}>
        <img
          src="/images/magazine/logo.svg"
          alt="logo"
        />
        <span>
          Евангельская истина <br />
          для наших сердец и умов
        </span>
      </div>

      <section className={styles.container}>
        <div className={styles.delimiter} />
        <div className={styles.filter}>
          {addedTags.length > 0 ? null : (
            <span
              onClick={() => {
                clearFilter();
              }}
            >
              Все статьи
            </span>
          )}

          {addedTags.map((tag) => (
            <span
              onClick={() => {
                deleteTag(tag);
              }}
            >
              {tag[0].toUpperCase() + tag.substring(1)}
              <img
                src="/images/magazine/cross.svg"
                alt="cross"
              />
            </span>
          ))}

          <div onClick={() => setTagListOpen(true)}>
            <img
              src="/images/magazine/plus.svg"
              alt="plus"
            />

            {tagListOpen && (
              <ul
                ref={ref}
                className={styles.list}
                onClick={(e) => e.stopPropagation()}
              >
                {tags?.map((tag) => (
                  <li
                    key={tag}
                    onClick={() => addTag(tag)}
                  >
                    &#43; {tag[0].toUpperCase() + tag.substring(1)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.articles}>
          {articles.map((article) => (
            <article key={article.slug}>
              <div
                className={styles.data}
                onClick={() => {
                  goToArticle(article.slug);
                }}
                style={{
                  backgroundColor: `var(${article.cardBackgroundColor})`,
                  color: `var(${article.cardTextColor})`,
                }}
              >
                <h2 className={styles.title}>{article.title}</h2>
                <span className={styles.point}>&#x2022;</span>
                <span className={styles.author}>{article.author}</span>
              </div>

              <div className={styles.tags}>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => {
                      addTag(tag);
                    }}
                  >
                    {tag[0].toUpperCase() + tag.substring(1)}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
