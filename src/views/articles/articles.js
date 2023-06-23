import styles from "./articles.module.css";

import { getAbsoluteUrl } from "@helpers/absolute-url.helper";
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router'

export const Articles = ({ articles }) => {
  const [items, setItems] = useState(articles);
  const [tags, setTags] = useState([]);
  const [tagListOpen, setTagListOpen] = useState(false);
  const [addedTags, setAddedTags] = useState([]);
  const tagListRef = useRef(null);
  const router = useRouter();
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
        uniqueTags.includes(tag) ? null : uniqueTags.push(tag)
      })
    });
    setTags(uniqueTags);
  };

  const addTag = (tag) => {
    window.moveTo(0, 0);
    addedTags.includes(tag) ? null : (
      setAddedTags(addTag => [...addTag, tag])
    )
    setTagListOpen(false);
    setTags(
      tags.filter(item => item !== tag)
    );
    setItems(
      items.filter(item => item.tags.includes(tag))
    );
  };

  const deleteTag = (deletedTag) => {
    const updatedAddedTags = addedTags.filter((item) => item !== deletedTag);
    addedTags.length === 1 ? setItems(articles) : setItems(
      articles.filter((item) => item.tags.some((tag) => updatedAddedTags.includes(tag)))
    );
    setAddedTags(updatedAddedTags);
    setTags(tag => [...tag, deletedTag]);
  };

  const clearFilter = () => {
    setItems(articles);
    setAddedTags([]);
    getAllDifferentTags();
  }

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

  const goToArticle = (slug) => {
    router.push(slug);
  };

  const setBackground = (background, color) => {
    return {
      backgroundColor: background, 
      color
    }
  }

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
          <span onClick={() => { clearFilter() }}>Все статьи</span>
          {
            addedTags.map((tag) => (
              <span onClick={() => { deleteTag(tag) }}>
                {tag[0].toUpperCase() + tag.substring(1)}
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

              <div
                className={styles.childData}
                onClick={() => { goToArticle(item.slug) }}
                style={setBackground(item.background, item.color)}
              >
                <h2 className={styles.childTitle}>{item.title}</h2>
                <span className={styles.childPoint}>&#x2022;</span>
                <span className={styles.childAuthor}>{item.author}</span>
              </div>

              <div className={styles.childTags}>
                {item.tags.map((tag) => (
                  <span key={tag} onClick={() => { addTag(tag) }}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
