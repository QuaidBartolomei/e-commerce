import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import Navbar from 'components/Navbar/Navbar';
import { UserProvider } from 'components/User/user.context';
import type { AppProps } from 'next/app';
import MyThemeProvider from 'pages/_theme';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { initFirebase } from 'utils/firebase.utils';

initFirebase();
axios.defaults.baseURL = 'http://localhost:3000';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <CssBaseline />
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />
        </QueryClientProvider>
      </UserProvider>
    </MyThemeProvider>
  );
}
