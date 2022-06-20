import { Hero } from "@components/hero";
import { Highlighted } from "@components/highlighted";
import { Container } from "@components/container";
import { Verse } from "@components/verse";
import { Quote } from "@components/quote";
import { Colored } from "@components/colored";

const customComponents = {
  Hero,
  Highlighted,
  Container,
  Verse,
  Quote,
  Colored,
};

export const components = {
  ...customComponents,
};
