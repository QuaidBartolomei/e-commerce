import AppBar from '@material-ui/core/AppBar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import ShoppingCartIcon from '../ShoppingCartIcon';
import NavbarTitle from './NavbarTitle';
import NavigationMenu from './NavigationMenu';
import UserMenu from './UserMenu';

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
    },
  })
);
 
const Navbar = () => {
  const classes = useStyles();

  const ShoppingCartLink = () => (
    <Link to={Routes.ShoppingCart}>
      <ShoppingCartIcon />
    </Link>
  );

  const NavbarContent = () => (
    <Toolbar className={classes.toolbar}>
      <NavigationMenu />
      <NavbarTitle />
      <UserMenu />
      <ShoppingCartLink />
    </Toolbar>
  );

  return (
    <React.Fragment>
      <AppBar position='fixed' color='primary'>
        <NavbarContent />
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
