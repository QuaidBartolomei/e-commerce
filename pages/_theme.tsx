import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { PropsWithChildren } from 'react';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    background: {},
    primary: {
      // https://coolors.co/2a373c-607d8b-a8dadc
      main: '#607d8b',
      light: '#a8dadc',
      dark: '#2A373C',
    },
    secondary: {
      main: '#212121',
    },
  },
});

export default function MyThemeProvider({ children }: PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
