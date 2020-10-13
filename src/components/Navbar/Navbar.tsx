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
  const [showDrawer, setShowDrawer] = React.useState(false);

  const LogoLink = (
    <Link to={Routes.Homepage} className={classes.toolbarLink}>
      <Logo className={classes.logo} stroke='black' strokeWidth={2} />
    </Link>
  );

  const ShoppingCartLink = (
    <Link to={Routes.ShoppingCart}>
      <ShoppingCartIcon />
    </Link>
  );

  return (
    <Toolbar className={classes.toolbar}>
      <UserDrawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} />
      {LogoLink}
      <NavbarTitle title={title} />
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton onClick={() => setShowDrawer(true)}>
        <AccountCircleIcon />
      </IconButton>
      {ShoppingCartLink}
    </Toolbar>
  );
};

export default Navbar;
