import { Hero } from "./hero";
import { Quote } from "./quote";
import { Highlighted } from "./highlighted";
import { LowestImage } from "./lowest-image";
import { HighestImage } from "./highest-image";
import { SubscriptionForm } from "./subscriptionForm";

const customComponents = {
  Hero,
  Quote,
  Highlighted,
  LowestImage,
  HighestImage,
  SubscriptionForm,
};

export const components = {
  ...customComponents,
};
