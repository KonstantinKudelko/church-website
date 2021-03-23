import { FC } from '~/utils/types';
import { Quote } from '../molecules/quote';
import { Image } from '../molecules/image';
import { Delimiter } from '../atoms/delimiter';
import { ContentBlock } from '../types';
import { CONTENT_TYPES } from './content-types';
import { Paragraph, Title1, Title2, Title3, Title4 } from '../atoms/typography';

export const getComponent = (block: ContentBlock): FC<{ data: any }> => {
  if (block.type === CONTENT_TYPES.PARAGRAPH) {
    return Paragraph;
  }

  if (block.type === CONTENT_TYPES.HEADER) {
    return {
      1: Title1,
      2: Title2,
      3: Title3,
      4: Title4,
    }[block.data.level];
  }

  if (block.type === CONTENT_TYPES.QUOTE) {
    return Quote;
  }

  if (block.type === CONTENT_TYPES.IMAGE) {
    return Image;
  }

  if (block.type === CONTENT_TYPES.DELIMETER) {
    return Delimiter;
  }

  return () => null;
};
