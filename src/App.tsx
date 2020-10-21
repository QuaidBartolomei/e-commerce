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
import { BrowserRouter } from 'react-router-dom';
import Router from 'Router';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#212121',
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
    <BrowserRouter>
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <Box className={classes.page}>
            <Container disableGutters className={classes.mainContent}>
              <Navbar />
              <Router />
            </Container>
            <Footer />
          </Box>
        </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
