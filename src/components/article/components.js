import { Hero } from "@components/hero";
import { Quote } from "@components/article/quote";
import { Highlighted } from "@components/highlighted";
import { HandsRoundedCorners } from "@components/article/hands-rounded-corners";

const customComponents = {
  Hero,
  Quote,
  Highlighted,
  HandsRoundedCorners,
};

export const components = {
  ...customComponents,
};
