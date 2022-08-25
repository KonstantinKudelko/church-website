import { MDXRemote } from "next-mdx-remote";
import { components } from "./components";
import { SubscriptionForm } from "@components/subscription-form";

import styles from "./article.module.css";

export const Article = ({ content }) => {
  return (
    <article className={styles.content}>
      <MDXRemote compiledSource={content} components={components} />

      <SubscriptionForm />
    </article>
  );
};
