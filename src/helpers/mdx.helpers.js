import fs from "fs";
import path from "path";
import parse from "gray-matter";
import unwrapImages from "remark-unwrap-images";
import { serialize } from "next-mdx-remote/serialize";

const ROOT_DIRECTORY = process.cwd();
const BASE_DIRECTORY = path.join(ROOT_DIRECTORY, "storage");
const ARTICLES_DIRECTORY = path.join(BASE_DIRECTORY, "articles");

const getArticleSource = (fileName) => {
  const articlePath = path.join(ARTICLES_DIRECTORY, `${fileName}.mdx`);
  return fs.readFileSync(articlePath);
};

export const getArticlesNames = async () => {
  return fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((x) => x.endsWith(".mdx"))
    .map((fileName) => fileName.replace(".mdx", ""));
};

export const getArticleContent = async (fileName) => {
  const source = getArticleSource(fileName);
  const { content } = parse(source);
  const { compiledSource } = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [unwrapImages],
    },
  });
  return compiledSource;
};

export const getArticlesMetadata = async () => {
  const articlesNames = await getArticlesNames();
  return articlesNames.map((fileName) => {
    const source = getArticleSource(fileName);
    const { data } = parse(source);
    return data;
  });
};

export const getArticleMetadata = async (fileName) => {
  const source = getArticleSource(fileName);
  const { data } = parse(source);
  return data;
};
