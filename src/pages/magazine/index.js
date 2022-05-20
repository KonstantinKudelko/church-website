import fs from "fs";
import path from "path";
import parse from "gray-matter";

import { ARTICLES_DIRECTORY } from "@constants";

export default function Articles({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <span key={article.slug}>{article.title}</span>
      ))}
    </div>
  );
}

export const getStaticProps = () => {
  const paths = fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((x) => x.endsWith(".mdx"))
    .map((fileName) => {
      const articleFilePath = path.join(ARTICLES_DIRECTORY, fileName);
      const source = fs.readFileSync(articleFilePath);
      const { data } = parse(source);
      return data;
    });

  return {
    props: {
      articles: paths,
    },
  };
};
