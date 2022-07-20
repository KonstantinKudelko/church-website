import { Quote } from "./quote";
import { Header } from "./header";
import { Thought } from "./thought";
import { Highlighted } from "./highlighted";
import { LowestImage } from "./lowest-image";
import { HighestImage } from "./highest-image";
import { SubscriptionForm } from "./subscription-form";
import { ColoredTextBlock } from "./colored-text-block";
import { HighlightedTextBlock } from "./highlighted-text-block";

const customComponents = {
  Quote,
  Header,
  Thought,
  Highlighted,
  LowestImage,
  HighestImage,
  SubscriptionForm,
  ColoredTextBlock,
  HighlightedTextBlock,
};

export const components = {
  ...customComponents,
};
