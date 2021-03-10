import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';

import { theme } from '~/ui';
import { GlobalStyle } from '~/global-styles';

const Index = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>РЮЗ</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="/fonts/index.css"></link>
    </Head>

    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default Index;
