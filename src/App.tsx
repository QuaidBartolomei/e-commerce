import Container from '@material-ui/core/Container/Container';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CategoryMenu from 'components/CategoryMenu/CategoryMenu';
import Footer from 'components/Footer';
import Navbar, { navbarHeight } from 'components/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Router';
import { UserProvider } from 'UserContext';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
    content: {
      height: `calc(100vh - ${navbarHeight})`,
      maxWidth: '100%',
    },
  })
);
const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <CssBaseline />
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <CategoryMenu />
          <Router />
          <Footer />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
