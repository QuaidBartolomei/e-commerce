import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Footer } from '@quaidbartolomei/material-ui.layout.footer';
import Navbar from 'components/Navbar/Navbar';
import { UserProvider } from 'components/User/user.context';
import type { AppProps } from 'next/app';
import MyThemeProvider from 'pages/_theme';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'utils/firebase.utils';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Navbar />
            <div
              style={{
                flexGrow: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Component {...pageProps} />
            </div>
            <Footer copyright='CAB Clothing' />
          </div>
        </UserProvider>
      </QueryClientProvider>
    </MyThemeProvider>
  );
}
