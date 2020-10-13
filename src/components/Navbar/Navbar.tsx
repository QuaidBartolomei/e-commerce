import IconButton from '@material-ui/core/IconButton';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import ShoppingCartIcon from '../ShoppingCartIcon';
import NavbarTitle from './NavbarTitle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserDrawer from 'components/Navbar/UserDrawer';

import MenuIcon from '@material-ui/icons/Menu';
import NavigationDrawer from './NavigationDrawer';
export const navbarHeight = 96;

const title = 'CAB Clothing';

const useStyles = makeStyles((theme) =>
  createStyles({
    logo: {
      height: 32,
      [theme.breakpoints.up('md')]: {
        height: 64,
      },
      margin: theme.spacing(1, 0),
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const [showUserDrawer, setShowUserDrawer] = React.useState(false);
  const [showNavDrawer, setShowNavDrawer] = React.useState(false);

  const LogoLink = (
    <Link to={Routes.Homepage} className={classes.toolbarLink}>
      <Logo className={classes.logo} stroke='black' strokeWidth={2} />
    </Link>
  );

  const NavMenuButton = (
    <IconButton
      edge='start'
      color='inherit'
      aria-label='menu'
      onClick={() => setShowNavDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
  );

  const ShoppingCartLink = (
    <Link to={Routes.ShoppingCart}>
      <ShoppingCartIcon />
    </Link>
  );

  return (
    <Toolbar className={classes.toolbar}>
      <UserDrawer
        isOpen={showUserDrawer}
        onClose={() => setShowUserDrawer(false)}
      />
      <NavigationDrawer
        isOpen={showNavDrawer}
        onClose={() => setShowNavDrawer(false)}
      />
      {NavMenuButton}
      <NavbarTitle title={title} />
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton onClick={() => setShowUserDrawer(true)}>
        <AccountCircleIcon />
      </IconButton>
      {ShoppingCartLink}
    </Toolbar>
  );
};

export default Navbar;
