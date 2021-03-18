import styled from 'styled-components';

import { Text } from 'theme-ui';

type QuoteProps = {
  data: {
    alignment: string;
    caption: string;
    text: string;
  };
};

export const Quote = ({ data: { text } }: QuoteProps) => {
  return (
    <Blockquote>
      <Text as="p" sx={{ variant: 'text.body', fontStyle: 'italic' }}>
        {text}
      </Text>
    </Blockquote>
  );
};

const Blockquote = styled.blockquote`
  margin: 0;
  padding-left: 24px;
  margin-bottom: 24px;

  border-left: 3px solid black;
`;
