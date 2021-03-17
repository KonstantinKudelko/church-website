import { Box } from 'theme-ui';

import { FC } from '~/utils/types';
import { Note } from '../atoms/note';
import { ROUTES } from '~/routes';
import { Delimiter } from "../atoms/delimiter";
import { Content, ContentBlock } from '~/features/magazine';
import { Title1, Title2, Title3, Title4, Paragraph } from "../atoms/typography";

export const Img: FC<{
  data: {
    caption: string;
    file: { url: string };
    stretched: boolean;
    withBackground: boolean;
    withBorder: boolean;
  };
}> = ({
  data: {
    caption,
    file: { url },
    stretched,
    withBackground,
    withBorder,
  },
}) => <img src={`${ROUTES.api}${url}`} alt={caption} />;

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
    return Note;
  }

  if (block.type === 'image') {
    return Img;
  }

  if (block.type === 'delimiter') {
    return Delimiter;
  }

  return () => null;
};

export type ArticleProps = {
  title: string;
  cover?: string;
  blocks: Content;
};

export const ArticleBlock: FC<ArticleProps> = ({ title, cover, blocks }) => {
  return (
    <Box m="0 auto" py={5} sx={{ maxWidth: '650px' }}>
      <Title1 data={{ text: title }} />

      {blocks.map((block) => {
        const Component = getComponent(block);

        return <Component data={block.data} />;
      })}
    </Box>
  );
};
