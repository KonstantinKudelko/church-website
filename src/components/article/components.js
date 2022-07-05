import { Hero } from "@components/hero";
import { Quote } from "@components/article/quote";
import { Highlighted } from "@components/highlighted";
import { Thought } from "@components/article/thought";
import { Filled } from "@components/article/filled";

const customComponents = {
  Hero,
  Quote,
  Highlighted,
  Thought,
  Filled,
};

export const components = {
  ...customComponents,
};
