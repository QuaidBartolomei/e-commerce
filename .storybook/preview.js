import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'utils/_theme';
import { UserProvider } from 'components/User/user.context';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 11.2
import CssBaseline from '@mui/material/CssBaseline';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Story />
      </UserProvider>
    </ThemeProvider>
  ),
];
