import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container/Container';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import {
  createMuiTheme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRouter from 'Router';
import types from '@material-ui/lab/themeAugmentation';
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

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid='location-display'>{location.pathname}</div>;
};

const App = () => {
  const classes = useStyles();
  return (
    <UserProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Box className={classes.page}>
            <Container disableGutters className={classes.mainContent}>
              <Navbar />
              <AppRouter />
            </Container>
            <Footer />
          </Box>
        </ThemeProvider>
        <LocationDisplay />
    </UserProvider>
  );
};

export default App;
