import AppBar from '@material-ui/core/AppBar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import ShoppingCartIconButton from './ShoppingCartIcon';
import NavbarTitle from './NavbarTitle';
import NavigationDrawerMenu from './NavigationMenu';
import UserMenu from './UserMenu';
import AddRandomItemButton from 'components/AddRandomItemButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
    },
  })
);
 
const Navbar = () => {
  const classes = useStyles();

  const NavbarContent = () => (
    <Toolbar className={classes.toolbar}>
      <NavigationDrawerMenu />
      <NavbarTitle />
      <UserMenu />
      <ShoppingCartIconButton />
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
