import IconButton from '@material-ui/core/IconButton';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserState } from 'UserContext';
import ShoppingCartIcon from './ShoppingCartIcon';
import SignOutButton from './SignOutButton';
import UserButton from './UserButton';


export const navbarHeight = 96;

const title = 'CAB Clothing';

const useStyles = makeStyles((theme) =>
  createStyles({
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
      <UserButton />
      {ShoppingCartLink}
    </Toolbar>
  );
};

export default Navbar;
