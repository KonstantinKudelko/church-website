const breakpoints = ['576px', '768px', '1250px'];

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  breakpoints,
  media: {
    small: `@media (min-width: ${breakpoints[0]})`,
    medium: `@media (min-width: ${breakpoints[1]})`,
    large: `@media (min-width: ${breakpoints[2]})`,
  },
  colors: {
    text: '#000000',
    gray: '#757575',
    background: '#ffffff',
  },
  fonts: {
    body: 'Lava Pro, serif, Arial, Helvetica',
    heading: 'Formular, sans-serif',
  },
  lineHeights: {
    h1: '65px',
    body: '32px',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  text: {
    h1: {
      color: 'text',
      fontSize: 6,
      fontFamily: 'heading',
      lineHeight: 'h1',
      fontWeight: 'heading',
    },
    h2: {
      color: 'text',
      fontSize: 4,
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'heading',
    },
    h3: {
      color: 'text',
      fontSize: 3,
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'heading',
    },
    h4: {
      color: 'text',
      fontSize: 2,
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'heading',
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'heading',
      fontSize: 0,
    },
    body: {
      fontSize: '18px',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
};
