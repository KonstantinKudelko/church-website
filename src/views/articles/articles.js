import Head from "next/head";
import { ArticleCard } from "@components/article-card";
import { Logo } from "@components/logo";

import styles from "./articles.module.css";

const title = "Статьи";
const description = "Евангельская истина для наших сердец и умов";

export const Articles = ({ articles }) => {
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
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo color="#1D1B17" />
        </div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </header>

      <main className={styles.container}>
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            date={article.date}
            minsToRead={article["mins-to-read"]}
            title={article.title}
            author={article.author}
            color={article.color}
            tags={article.tags}
            link={article.slug}
          />
        ))}
      </main>
    </>
  );
};
