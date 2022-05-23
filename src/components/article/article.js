import { MDXRemote } from "next-mdx-remote";
import { components } from "./components";

export const Article = ({ content }) => {
  return <MDXRemote compiledSource={content} components={components} />;
};
