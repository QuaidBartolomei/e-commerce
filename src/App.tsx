import React from 'react'
import Router from 'Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar, { navbarHeight } from 'components/Navbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: `calc(100vh - ${navbarHeight})`,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 8px',
      '&>*': {
        height: '100%',
        width: '100%',
      },
    },
  })
);
const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <div className={classes.content}>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App
