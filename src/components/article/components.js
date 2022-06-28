import { Hero } from "./hero";
import { Quote } from "./quote";
import { Highlighted } from "./highlighted";
import { LowestImages } from "./lowest-images";
import { HighestImages } from "./highest-images";

const customComponents = {
  Hero,
  Quote,
  Highlighted,
  LowestImages,
  HighestImages,
};

export const components = {
  ...customComponents,
};
