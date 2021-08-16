import AppBar from '@material-ui/core/AppBar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import routes from 'utils/routes';
import NavbarTitle from './NavbarTitle';
import NavigationDrawerMenu from './NavigationMenu';
import ShoppingCartIconButton from './ShoppingCartIcon';
import UserMenu from './UserMenu';

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
  const classes = useStyles();
  const router = useRouter();
  const isHomepage = router.pathname == routes.index;

  return (
    <React.Fragment>
      <AppBar
        position='fixed'
        elevation={isHomepage && !scrollTrigger ? 0 : 1}
        color={isHomepage && !scrollTrigger ? 'transparent' : 'primary'}
      >
        <Toolbar className={classes.toolbar}>
          <NavigationDrawerMenu />
          <NavbarTitle />
          <UserMenu />
          <ShoppingCartIconButton />
        </Toolbar>
      </AppBar>
      {!isHomepage && <Toolbar />}
    </React.Fragment>
  );
};

export default Navbar;
