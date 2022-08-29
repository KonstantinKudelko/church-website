import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { components } from "./components";
import { getAbsoluteUrl } from "@helpers/absolute-url.helper";
import { SubscriptionForm } from "@components/subscription-form";

import styles from "./article.module.css";

export const Article = ({ content, metadata }) => {
  const { hero, slug, title, description } = metadata;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={getAbsoluteUrl(hero)} />
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
