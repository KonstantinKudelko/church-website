import { MDXRemote } from "next-mdx-remote";
import { components } from "./components";
import styles from "./article.module.css";

export const Article = ({ content }) => {
  return (
    <main className={styles.content}>
      <MDXRemote compiledSource={content} components={components} />
    </main>
  );
};
