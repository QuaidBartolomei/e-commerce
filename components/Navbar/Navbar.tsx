import AppBar from '@material-ui/core/AppBar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
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
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
  });
  const classes = useStyles({ scrollTrigger });

  return (
    <React.Fragment>
      <AppBar
        position='fixed'
        elevation={scrollTrigger ? 1 : 0}
        color={scrollTrigger ? 'primary' : 'transparent'}
      >
        <Toolbar className={classes.toolbar}>
          <NavigationDrawerMenu />
          <NavbarTitle />
          <SignInButton />
          <ShoppingCartIconButton />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
