import { Hero } from "@components/hero";
import { Quote } from "@components/article/quote";
import { Highlighted } from "@components/highlighted";
import { Thought } from "@components/article/thought";
import { HighlightedTextBlock } from "@components/article/highlightedTextBlock";
import { ColoredTextBlock } from "@components/article/coloredTextBlock";

const customComponents = {
  Hero,
  Quote,
  Highlighted,
  Thought,
  HighlightedTextBlock,
  ColoredTextBlock,
};

export const components = {
  ...customComponents,
};
