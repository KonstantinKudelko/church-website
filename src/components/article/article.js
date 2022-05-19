import { MDXRemote } from "next-mdx-remote";

import { HelloWorld } from "@components/hello-world";

const components = {
  HelloWorld,
};

export const Article = ({ content }) => {
  return <MDXRemote compiledSource={content} components={components} />;
};
