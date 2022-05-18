import fs from "fs";
import path from "path";
import parse from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { HelloWorld } from "@components/hello-world";

const components = {
  HelloWorld,
};

export default function Article({ content }) {
  return <MDXRemote compiledSource={content} components={components} />;
}

export const getStaticProps = async ({ params }) => {
  const ROOT_DIRECTORY = process.cwd();
  const BASE_DIRECTORY = path.join(ROOT_DIRECTORY, "storage");
  const MAGAZINE_FOLDER_DIRECTORY = path.join(BASE_DIRECTORY, "magazine");
  const articleFilePath = path.join(MAGAZINE_FOLDER_DIRECTORY, `${params.id}.mdx`);
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
  const ROOT_DIRECTORY = process.cwd();
  const BASE_DIRECTORY = path.join(ROOT_DIRECTORY, "storage");
  const MAGAZINE_FOLDER_DIRECTORY = path.join(BASE_DIRECTORY, "magazine");
  const paths = fs
    .readdirSync(MAGAZINE_FOLDER_DIRECTORY)
    .filter((x) => x.endsWith(".mdx"))
    .map((fileName) => fileName.replace(".mdx", ""))
    .map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};
