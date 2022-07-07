import { Hero } from "./hero";
import { Quote } from "./quote";
import { Highlighted } from "./highlighted";
import { LowestImage } from "./lowest-image";
import { HighestImage } from "./highest-image";

const customComponents = {
  Hero,
  Quote,
  Highlighted,
  LowestImage,
  HighestImage,
};

export const components = {
  ...customComponents,
};
