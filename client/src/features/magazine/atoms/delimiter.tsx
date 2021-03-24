import styled from 'styled-components';

export const Delimiter = styled.div`
  text-align: center;
  margin-bottom: 24px;

  :after {
    content: '• • •';
    font-size: 24px;
    word-spacing: 18px;
  }
`;
