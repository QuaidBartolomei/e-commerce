import AppBar from '@material-ui/core/AppBar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import SignInButton from 'components/SignInButton';
import React from 'react';
import NavbarTitle from './NavbarTitle';
import NavigationDrawerMenu from './NavigationMenu';
import ShoppingCartIconButton from './ShoppingCartIcon';

const useStyles = makeStyles(theme =>
  createStyles({
    toolbar: {
      color: 'white',
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position='fixed' color='primary'>
        <Toolbar className={classes.toolbar}>
          <NavigationDrawerMenu />
          <NavbarTitle />
          <SignInButton />
          <ShoppingCartIconButton />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
