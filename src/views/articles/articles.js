import styles from "./article.module.css";

import { getAbsoluteUrl } from "@helpers/absolute-url.helper";
import { useEffect, useState, useRef } from "react";

export const Articles = ({ articles }) => {
  const [items, setItems] = useState(articles)
  const [tags, setTags] = useState([]);
  const [tagListOpen, setTagListOpen] = useState(false);
  const [addedTags, setAddedTags] = useState([]);
  const tagListRef = useRef(null);
  useOutsideClick(tagListRef);

  useEffect(() => {
    getAllDifferentTags();
  }, []);

  function useOutsideClick(ref) {
    useEffect(() => {

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setTagListOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {

        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const getAllDifferentTags = () => {
    const uniqueTags = [];

    articles.forEach((article) => {
      article.tags.forEach((tag) => {
        tags.includes(tag) ? null : uniqueTags.push(tag)
      })
    })
    setTags(uniqueTags);
  };

  const addTag = (tag) => {
    setAddedTags(addTag => [...addTag, tag[0].toUpperCase() + tag.substring(1)]);
    setTagListOpen(false);
    setTags(
      tags.filter(item => item !== tag)
    );
    setItems(
      items.filter(item => item.tags.includes(tag))
    );
  };

  const deleteTag = (deletedTag) => {
    setAddedTags(
      addedTags.filter(item => item !== deletedTag)
    );
    setTags(tag => [...tag, deletedTag]);

    if (addedTags.length === 1) {
      setItems(articles);
    } else {
      setItems(
        articles.filter((item) => item.tags.some((tag) => addedTags.includes(tag)))
      );
    }
  };

  const tagList = () => {
    return (
      <ul
        ref={tagListRef}
        className={styles.tagList}
        onClick={(e) => { e.stopPropagation(); }}
      >
        {tags ? tags.map((tag) => (
          <li key={tag} onClick={() => { addTag(tag) }}>
            &#43; {tag[0].toUpperCase() + tag.substring(1)}
          </li>
        )) : null}
      </ul>
    )
  };

  return (
    <main>

      <div className={styles.logo}>
        {/* <img src={getAbsoluteUrl("/images/magazine/logo.svg")} alt="logo" /> */}
        <img src="/images/magazine/logo.svg" alt="logo" />
        <span>Евангельская истина <br />для наших сердец и умов</span>
      </div>

      <section className={styles.container}>
        <hr />
        <div className={styles.filter}>
          <span>Все статьи</span>
          {
            addedTags.map((tag) => (
              <span onClick={() => { deleteTag(tag) }}>
                {tag}
                <img src="/images/magazine/vector.svg" alt="vector" />
              </span>
            ))
          }
          <div onClick={() => { setTagListOpen(!tagListOpen) }}>
            &#43;
            {tagListOpen ? tagList() : null}
          </div>
        </div>

        <div className={styles.list}>
          {items.map((item) => (
            <article key={item.slug}>

              <div className={styles.childData}>
                <h2 className={styles.childTitle}>{item.title}</h2>
                <span className={styles.childPoint}>&#x2022;</span>
                <span className={styles.childAuthor}>{item.author}</span>
              </div>

              <div className={styles.childTags}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
