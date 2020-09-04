import Button from '@material-ui/core/Button/Button';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import logo_img from 'assets/logo.svg';
import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserDispatch, useUserState } from 'UserContext';
import ShoppingCartIcon from './ShoppingCartIcon';

export const navbarHeight = '64px';

const FlexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as CSSProperties;

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      ...FlexCenter,
      height: navbarHeight,
      padding: '8px 8px 0',
      fontSize: '1rem'
    },
    logo: {
      height: '100%',
    },
    navLinks: {
      ...FlexCenter,
      justifyContent: 'flex-end',
      width: '100%',
      '&>*': {
        marginLeft: '16px',
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const user = useUserState();
  return (
    <div className={classes.container}>
      <Link
        to={Routes.Homepage}
        style={{
          height: '100%',
          ...FlexCenter,
        }}
      >
        <img src={logo_img} className={classes.logo} alt='logo' />
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
    </div>
  );
};

export default Navbar;

const SignOutButton = () => {
  const userDispatch = useUserDispatch();
  return <Button onClick={() => userDispatch({type: 'logout'})}>Sign Out</Button>;
};
