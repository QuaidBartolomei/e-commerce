import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserState } from 'UserContext';
import ShoppingCartIcon from './ShoppingCartIcon';
import SignOutButton from './SignOutButton';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export const navbarHeight = 96;

const title = 'CAB Clothing';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: navbarHeight,
      height: 'fit-content',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&>*': {
        height: '100%',
      },
      padding: theme.spacing(1),
    },
    logoContainer: {
      height: '100%',
    },
    logo: {
      height: 32,
      [theme.breakpoints.up('md')]: {
        height: 64,
      },
      margin: theme.spacing(1, 0),
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      '&>*': {
        marginLeft: theme.spacing(2),
      },
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
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
  const user = useUserState();

  const LogoLink = (
    <Link to={Routes.Homepage} className={classes.toolbarLink}>
      <Logo className={classes.logo} stroke='black' strokeWidth={2} />
    </Link>
  );

  const Title = (
    <Typography
      component='h1'
      variant='h5'
      color='inherit'
      align='center'
      noWrap
      className={classes.toolbarTitle}
    >
      <Link to={Routes.Homepage}>{title}</Link>
    </Typography>
  );

  const UserButton =
    user._id !== '' ? (
      <SignOutButton />
    ) : (
      <Link to={Routes.SignIn} style={{ height: 24 }}>
        <AccountCircleIcon />
      </Link>
    );

  const ShoppingCartLink = (
    <Link to={Routes.ShoppingCart}>
      <ShoppingCartIcon />
    </Link>
  );

  return (
    <Toolbar className={classes.toolbar}>
      {LogoLink}
      {Title}
      <IconButton>
        <SearchIcon />
      </IconButton>
      {UserButton}
      {ShoppingCartLink}
    </Toolbar>
  );
};

export default Navbar;
