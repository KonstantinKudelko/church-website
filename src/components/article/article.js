import { MDXRemote } from "next-mdx-remote";
import { components } from "./components";
import { SubscriptionForm } from "./subscriptionForm";

import styles from "./article.module.css";

export const Article = ({ content }) => {
  return (
    <main className={styles.content}>
      <MDXRemote compiledSource={content} components={components} />

      <SubscriptionForm />
    </main>
  );
};
