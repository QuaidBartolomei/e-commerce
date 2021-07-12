import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import Navbar from 'components/Navbar/Navbar';
import { UserProvider } from 'components/User/user.context';
import type { AppProps } from 'next/app';
import MyThemeProvider from 'pages/_theme';
import React from 'react';
import { initFirebase } from 'utils/firebase.utils';

initFirebase();
axios.defaults.baseURL = 'http://localhost:3000';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <CssBaseline />
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
      </UserProvider>
    </MyThemeProvider>
  );
}
