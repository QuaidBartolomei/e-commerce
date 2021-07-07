import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { PropsWithChildren } from 'react';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    background: {},
    primary: {
      main: '#457b9d',
      light: '#a8dadc',
      dark: '#1d3557',
    },
    secondary: {
      main: '#e63946',
    },
  },
});

export default function MyThemeProvider({ children }: PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
