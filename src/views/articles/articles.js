import Head from "next/head";
import Image from "next/image";
import styles from "./articles.module.css";
import { useState } from "react";
import { formatTitle } from "@helpers/title.helper";
import { getAbsoluteUrl } from "@helpers/absolute-url.helper";

const hero = getAbsoluteUrl("/images/magazine/hero.svg");
const title = formatTitle("Журнал");
const description = "Евангельская истина для наших сердец и умов";

export const Articles = ({ articlesMetadata }) => {
  const uniqueTags = [...new Set(articlesMetadata.flatMap((article) => article.tags))];
  const [articles, setArticles] = useState(articlesMetadata);

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta
          name="description"
          content={description}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content={hero}
        />

        <meta
          property="og:image:secure_url"
          content={hero}
        />

        <meta
          property="og:title"
          content={title}
        />

        <meta
          property="og:description"
          content={description}
        />
      </Head>

      <main className={styles.articles}>
        <Image
          src="/images/magazine/hero.svg"
          alt="hero-image"
          width={466}
          height={211}
          priority={true}
        />

        <section className={styles.container}>
          <div className={styles.delimiter} />

          {/* FILTER */}

          {/* CARDS */}
        </section>
      </main>
    </>
  );
};
