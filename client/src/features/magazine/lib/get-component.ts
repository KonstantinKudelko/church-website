import { FC } from '~/utils/types';
import { Quote } from '../molecules/quote';
import { Image } from '../molecules/image';
import { Delimiter } from '../atoms/delimiter';
import { ContentBlock } from '../types';
import { Paragraph, Title1, Title2, Title3, Title4 } from '../atoms/typography';

export const getComponent = (block: ContentBlock): FC<{ data: any }> => {
  if (block.type === 'paragraph') {
    return Paragraph;
  }

  if (block.type === 'header') {
    return {
      1: Title1,
      2: Title2,
      3: Title3,
      4: Title4,
    }[block.data.level];
  }

  if (block.type === 'quote') {
    return Quote;
  }

  if (block.type === 'image') {
    return Image;
  }

  if (block.type === 'delimiter') {
    return Delimiter;
  }

  return () => null;
};
