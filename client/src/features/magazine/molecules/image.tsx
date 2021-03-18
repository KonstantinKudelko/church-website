import styled from 'styled-components';

import { Text, Image as ThemeImage } from 'theme-ui';
import { ROUTES } from '~/routes';

type ImageProps = {
  data: {
    caption: string;
    file: { url: string };
    stretched: boolean;
    withBorder: boolean;
    withBackground: boolean;
  };
};

export const Image = ({
  data: {
    caption,
    file: { url },
    stretched,
    withBackground,
    withBorder,
  },
}: ImageProps) => (
  <Figure stretched={stretched} withBorder={withBorder} withBackground={withBackground}>
    <ThemeImage mb={1} alt={caption} src={`${ROUTES.api}${url}`} />

    {Boolean(caption) && (
      <Text as="figcaption" sx={{ fontSize: 2, color: 'gray', textAlign: 'center' }}>
        {caption}
      </Text>
    )}
  </Figure>
);

const Figure = styled.figure<{
  stretched: boolean;
  withBorder: boolean;
  withBackground: boolean;
}>`
  margin: 0;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
