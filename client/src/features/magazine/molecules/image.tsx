import styled from 'styled-components';

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
    <ImageBlock alt={caption} src={`${ROUTES.api}${url}`} />

    {Boolean(caption) && <Caption>{caption}</Caption>}
  </Figure>
);

const Figure = styled.figure<{
  stretched: boolean;
  withBorder: boolean;
  withBackground: boolean;
}>``;

const ImageBlock = styled.img``;

const Caption = styled.figcaption``;
