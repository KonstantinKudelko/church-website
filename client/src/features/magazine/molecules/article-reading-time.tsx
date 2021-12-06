import { Text } from '@theme-ui/components';

import { CONTENT_TYPES } from '../lib';
import { Content, HeaderBlock, ParagraphBlock, QuoteBlock } from '../types';

type ArticleReadingTime = {
  blocks: Content;
};

export const ArticleReadingTime = ({ blocks }: ArticleReadingTime) => {
  const contentLength = blocks
    .filter(
      (block): block is ParagraphBlock | QuoteBlock | HeaderBlock =>
        block.type === CONTENT_TYPES.HEADER ||
        block.type === CONTENT_TYPES.QUOTE ||
        block.type === CONTENT_TYPES.PARAGRAPH,
    )
    .map((block) => block.data.text)
    .join()
    .split(' ').length;
  const wordsPerMinute = 200;
  const readingTime = Math.ceil(contentLength / wordsPerMinute);

  return (
    <Text ml={2} sx={{ color: 'gray', fontSize: 1, fontFamily: 'heading' }}>
      {readingTime} мин чтения
    </Text>
  );
};
