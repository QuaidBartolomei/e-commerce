import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import {
  createMuiTheme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import types from '@material-ui/lab/themeAugmentation';
import { ThemeProvider } from '@material-ui/styles';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import AppRouter from 'Router';
import { UserProvider } from 'UserContext';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#212121',
    },
  },
  overrides: {
    MuiAlert: {
      filledSuccess: {
        backgroundColor: '#607d8b',
      },
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    page: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    mainContent: {
      flexGrow: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const App = () => {
  const classes = useStyles();
  return (
    <UserProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Box className={classes.page}>
            <Box className={classes.mainContent}>
              <Navbar />
              <AppRouter />
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
    </UserProvider>
  );
};

export default App;
