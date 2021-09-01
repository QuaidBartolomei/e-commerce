import { CacheProvider, EmotionCache } from '@emotion/react';
import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from 'components/Layout';
import { UserProvider } from 'components/User/user.context';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import createEmotionCache from 'utils/createEmotionCache';
import 'utils/firebase.utils';
import { theme } from '../utils/_theme';

const queryClient = new QueryClient();

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>CAB Clothing</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
