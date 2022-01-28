import styled from 'styled-components';
import { Text } from 'theme-ui';
import { theme } from '~/ui';

type ListProps = { data: { items: string[]; style: string } };

export const List = ({ data: { items } }: ListProps) => (
  <StyledList>
    {items.map((item, index) => (
      <Text
        as="li"
        sx={{
          variant: 'text.body',
          ':before': {
            content: '""',
            height: '8px',
            width: '8px',
            marginTop: '11px',
            borderRadius: '100%',
            backgroundColor: 'text',
            position: 'absolute',
            left: '0',
          },
        }}
        key={index}
      >
        {item}
      </Text>
    ))}
  </StyledList>
);

const StyledList = styled.ul`
  padding-left: ${theme.space[4]}px;
  position: relative;
  list-style: none;
`;
