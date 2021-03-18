import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  p {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
  }

  @font-face {
    font-family: 'Formular';
    src: url('Formular-BlackItalic.eot');
    src: local('Formular Black Italic'), local('Formular-BlackItalic'),
        url('Formular-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('Formular-BlackItalic.woff2') format('woff2'),
        url('Formular-BlackItalic.woff') format('woff'),
        url('Formular-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular/Formular-MediumItalic.eot');
    src: local('Formular Medium Italic'), local('Formular-MediumItalic'),
        url('/fonts/Formular/Formular-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-MediumItalic.woff2') format('woff2'),
        url('/fonts/Formular/Formular-MediumItalic.woff') format('woff'),
        url('/fonts/Formular/Formular-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular/Formular-Italic.eot');
    src: local('Formular Italic'), local('Formular-Italic'),
        url('/fonts/Formular/Formular-Italic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-Italic.woff2') format('woff2'),
        url('/fonts/Formular/Formular-Italic.woff') format('woff'),
        url('/fonts/Formular/Formular-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular/Formular-LightItalic.eot');
    src: local('Formular Light Italic'), local('Formular-LightItalic'),
        url('/fonts/Formular/Formular-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-LightItalic.woff2') format('woff2'),
        url('/fonts/Formular/Formular-LightItalic.woff') format('woff'),
        url('/fonts/Formular/Formular-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Formular';
    src: url('Formular-Black.eot');
    src: local('Formular Black'), local('Formular-Black'),
        url('/fonts/Formular/Formular-Black.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-Black.woff2') format('woff2'),
        url('/fonts/Formular/Formular-Black.woff') format('woff'),
        url('/fonts/Formular/Formular-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular/Formular-Light.eot');
    src: local('Formular Light'), local('Formular-Light'),
        url('/fonts/Formular/Formular-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-Light.woff2') format('woff2'),
        url('/fonts/Formular/Formular-Light.woff') format('woff'),
        url('/fonts/Formular/Formular-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular/Formular.eot');
    src: local('Formular'),
        url('/fonts/Formular/Formular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular.woff2') format('woff2'),
        url('/fonts/Formular/Formular.woff') format('woff'),
        url('/fonts/Formular/Formular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular/Formular-Medium.eot');
    src: local('Formular Medium'), local('Formular-Medium'),
        url('/fonts/Formular/Formular-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-Medium.woff2') format('woff2'),
        url('/fonts/Formular/Formular-Medium.woff') format('woff'),
        url('/fonts/Formular/Formular-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: '/fonts/Formular/Formular';
    src: url('/fonts/Formular/Formular-BoldItalic.eot');
    src: local('Formular Bold Italic'), local('Formular-BoldItalic'),
        url('/fonts/Formular/Formular-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-BoldItalic.woff2') format('woff2'),
        url('/fonts/Formular/Formular-BoldItalic.woff') format('woff'),
        url('/fonts/Formular/Formular-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular/Formular-Bold.eot');
    src: local('Formular Bold'), local('Formular-Bold'),
        url('/fonts/Formular/Formular-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Formular/Formular-Bold.woff2') format('woff2'),
        url('/fonts/Formular/Formular-Bold.woff') format('woff'),
        url('/fonts/Formular/Formular-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url('/fonts/LavaPro/LavaPro-HeavyItalic.eot');
    src: local('Lava Pro Heavy Italic'), local('LavaPro-HeavyItalic'),
        url('/fonts/LavaPro/LavaPro-HeavyItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-HeavyItalic.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-HeavyItalic.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-HeavyItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url('/fonts/LavaPro/LavaPro-BoldItalic.eot');
    src: local('Lava Pro Bold Italic'), local('LavaPro-BoldItalic'),
        url('/fonts/LavaPro/LavaPro-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-BoldItalic.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-BoldItalic.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url('/fonts/LavaPro/LavaPro-Medium.eot');
    src: local('Lava Pro Medium'), local('LavaPro-Medium'),
        url('/fonts/LavaPro/LavaPro-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-Medium.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-Medium.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url('/fonts/LavaPro/LavaPro-Bold.eot');
    src: local('Lava Pro Bold'), local('LavaPro-Bold'),
        url('/fonts/LavaPro/LavaPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-Bold.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-Bold.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url('/fonts/LavaPro/LavaPro-Regular.eot');
    src: local('Lava Pro Regular'), local('LavaPro-Regular'),
        url('/fonts/LavaPro/LavaPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-Regular.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-Regular.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url('/fonts/LavaPro/LavaPro-MediumItalic.eot');
    src: local('Lava Pro Medium Italic'), local('LavaPro-MediumItalic'),
        url('/fonts/LavaPro/LavaPro-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-MediumItalic.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-MediumItalic.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url(/fonts/LavaPro/'LavaPro-RegularItalic.eot');
    src: local('Lava Pro Regular Italic'), local('LavaPro-RegularItalic'),
        url('/fonts/LavaPro/LavaPro-RegularItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-RegularItalic.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-RegularItalic.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-RegularItalic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lava Pro';
    src: url('/fonts/LavaPro/LavaPro-Heavy.eot');
    src: local('Lava Pro Heavy'), local('LavaPro-Heavy'),
        url('/fonts/LavaPro/LavaPro-Heavy.eot?#iefix') format('embedded-opentype'),
        url('/fonts/LavaPro/LavaPro-Heavy.woff2') format('woff2'),
        url('/fonts/LavaPro/LavaPro-Heavy.woff') format('woff'),
        url('/fonts/LavaPro/LavaPro-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;
