import { MDXRemote } from "next-mdx-remote";
import { components } from "./components";
import { SubscriptionForm } from "@components/subscription-form";

import styles from "./article.module.css";
import Head from "next/head";

export const Article = ({ content, metadata }) => {
  const { slug, title, description } = metadata;
  return (
    <>
      <Head>
        <title>{title}</title>
        <description>{description}</description>

        <meta property="og:url" content={`${process.env.VERCEL_URL}${slug}`} />
        <meta property="og:image" content={slug} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <article className={styles.content}>
        <MDXRemote compiledSource={content} components={components} />

        <SubscriptionForm />
      </article>
    </>
  );
};
