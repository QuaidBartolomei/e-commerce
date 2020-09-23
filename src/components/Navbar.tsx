import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Logo} from 'assets/logo.svg';
import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserDispatch, useUserState } from 'UserContext';
import ShoppingCartIcon from './ShoppingCartIcon';

export const navbarHeight = '64px';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: navbarHeight,
      fontSize: '1rem',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    logo: {
      height: '80%',
      fill: theme.palette.primary.contrastText,
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      '&>*': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const user = useUserState();
  return (
    <Container maxWidth='lg' className={classes.container}>
      <Link
        to={Routes.Homepage}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo className={classes.logo} stroke='white' strokeWidth={1} />
      </Link>
      <div className={classes.navLinks}>
        <Link to={Routes.Shop}>Shop</Link>
        <Link to={Routes.Checkout}>Checkout</Link>
        {user.isAuth ? (
          <SignOutButton />
        ) : (
          <Link to={Routes.SignIn}>Sign In</Link>
        )}
        <Link to='#'>
          <ShoppingCartIcon />
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;

const SignOutButton = () => {
  const userDispatch = useUserDispatch();
  return (
    <Button onClick={() => userDispatch({ type: 'logout' })}>Sign Out</Button>
  );
};
