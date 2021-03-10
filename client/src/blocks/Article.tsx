import { FC } from '~/utils/types';
import { ROUTES } from '~/routes';

type ContentBlock =
  | {
      type: 'paragraph';
      data: {
        text: string;
      };
    }
  | {
      type: 'header';
      data: {
        text: string;
        level: 1 | 2 | 3 | 4;
      };
    }
  | {
      type: 'quote';
      data: { alignment: string; caption: string; text: string };
    }
  | {
      type: 'delimiter';
      data: {};
    }
  | {
      type: 'image';
      data: {
        caption: string;
        file: { url: string };
        stretched: boolean;
        withBackground: boolean;
        withBorder: boolean;
      };
    };
type Content = ContentBlock[];

export const Title1: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return <h1 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />;
};
export const Title2: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return <h2 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />;
};
export const Title3: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return <h3 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />;
};
export const Title4: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return <h4 ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />;
};
export const Text: FC = (props) => {
  return <span {...props} />;
};
export const Strong: FC = (props) => {
  return <strong {...props} />;
};
export const Italic: FC = (props) => {
  return <i {...props} />;
};
export const Delimiter: FC = (props) => {
  return <hr {...props} />;
};
export const Paragraph: FC<{ data: { text: string } }> = ({ data: { text } }) => {
  return <p ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)} />;
};
export const Note: FC<{
  data: {
    alignment: string;
    caption: string;
    text: string;
  };
}> = ({ data: { alignment, caption, text } }) => {
  return <p>{text}</p>;
};
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
}) => (
  <img
    src={`${ROUTES.api}${url}`}
    alt={caption}
    style={{ maxWidth: '80%', maxHeight: '30rem', margin: 'auto' }}
  />
);

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
export const Article: FC<ArticleProps> = ({ title, cover, blocks }) => {
  return (
    <div>
      <Title1 data={{ text: title }} />

      {blocks.map((block) => {
        const Component = getComponent(block);

        return <Component data={block.data} />;
      })}
    </div>
  );
};
