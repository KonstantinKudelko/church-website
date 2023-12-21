import Image from "next/image";
import styles from "./articles.module.css";
import { useState } from "react";
import { MagazineCard } from "@components/magazine-card";
import { MagazineFilter } from "@components/magazine-filter";

export const Articles = ({ articlesMetadata }) => {
  const defaultTags = () => {
    const allTags = articlesMetadata.flatMap((article) => article.tags);
    // Use only unique tags
    return [...new Set(allTags)];
  };

  const [articles, setArticles] = useState(articlesMetadata);
  const [tagListOpen, setTagListOpen] = useState(false);
  const [addedTags, setAddedTags] = useState([]);
  const [tags, setTags] = useState(defaultTags());

  const addTag = (tag) => {
    window.moveTo(0, 0);
    addedTags.includes(tag) ? null : setAddedTags((addTag) => [...addTag, tag]);
    setTagListOpen(false);
    setTags(tags.filter((item) => item !== tag));
    setArticles(articles.filter((article) => article.tags.includes(tag)));
  };

  return (
    <main>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image
            src="/images/magazine/logo.svg"
            alt="logo"
            width={466}
            height={211}
            className={styles.logoImage}
          />

          <span className={styles.logoQuote}>
            Евангельская истина <br />
            для наших сердец и умов
          </span>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.delimiter} />

        <MagazineFilter
          tags={tags}
          addTag={addTag}
          setTags={setTags}
          addedTags={addedTags}
          defaultTags={defaultTags}
          setArticles={setArticles}
          tagListOpen={tagListOpen}
          setAddedTags={setAddedTags}
          setTagListOpen={setTagListOpen}
          articlesMetadata={articlesMetadata}
        />

        <div className={styles.articles}>
          {articles.map((article) => (
            <MagazineCard
              addTag={addTag}
              article={article}
              key={article.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
