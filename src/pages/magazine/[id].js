import fs from "fs";
import path from "path";
import parse from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { Article } from "@components/article";
import { ARTICLES_DIRECTORY } from "@constants";

export const getStaticProps = async ({ params }) => {
  const articleFilePath = path.join(ARTICLES_DIRECTORY, `${params.id}.mdx`);
  const source = fs.readFileSync(articleFilePath);
  const { content, data } = parse(source);
  const { compiledSource } = await serialize(content);
  return {
    props: {
      content: compiledSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((x) => x.endsWith(".mdx"))
    .map((fileName) => fileName.replace(".mdx", ""))
    .map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export default Article;
