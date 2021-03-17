import { Text } from "theme-ui";

type TextProps = { data: { text: string } };

export const Title1 = ({ data: { text } }: TextProps) => {
  return (
    <Text
      as='h1'
      mb={4}
      sx={{ variant: 'text.h1' }}
      ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)}
    />
  );
};

export const Title2 = ({ data: { text } }: TextProps) => {
  return (
    <Text
      as='h2'
      mb="24px"
      sx={{ variant: 'text.h2' }}
      ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)}
    />
  );
};

export const Title3 = ({ data: { text } }: TextProps) => {
  return (
    <Text
      as='h3'
      mb="24px"
      sx={{ variant: 'text.h3' }}
      ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)}
    />
  );
};

export const Title4 = ({ data: { text } }: TextProps) => {
  return (
    <Text
      as='h4'
      mb="24px"
      sx={{ variant: 'text.h4' }}
      ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)}
    />
  );
};

export const Paragraph = ({ data: { text } }: TextProps) => {
  return (
    <Text
      as="p"
      mb="24px"
      sx={{ variant: 'text.body' }}
      ref={(r) => ((r || { innerHTML: '' }).innerHTML = text)}
    />
  );
};
