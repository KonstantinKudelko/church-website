import { Quote } from "@components/quote";
import { Figure } from "@components/figure";
import { Divider } from "@components/divider";
import { Thought } from "@components/thought";
import { Highlighted } from "@components/highlighted";
import { LowestImage } from "@components/lowest-image";
import { HighestImage } from "@components/highest-image";
import { SubscriptionForm } from "@components/subscription-form";
import { ColoredTextBlock } from "@components/colored-text-block";
import { HighlightedTextBlock } from "@components/highlighted-text-block";
import { ArticleHeader as Header } from "@components/article-header";
import { BibleVerse, BiblePassage } from "@components/bible-passage";

const standardComponents = {
  hr: Divider,
  img: Figure,
};

const customComponents = {
  Quote,
  Header,
  Thought,
  Highlighted,
  LowestImage,
  HighestImage,
  BibleVerse,
  BiblePassage,
  SubscriptionForm,
  ColoredTextBlock,
  HighlightedTextBlock,
};

export const components = {
  ...standardComponents,
  ...customComponents,
};
