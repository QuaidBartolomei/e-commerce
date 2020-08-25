import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import logo_img from 'assets/logo.svg';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export const navbarHeight = '48px';

const FlexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as CSSProperties;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      ...FlexCenter,
      height: navbarHeight,
      padding: '0 8px',
      background: '#888',
    },
    logo: {
      height: '90%',
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
  return (
    <div className={classes.container}>
      <Link
        to='/'
        style={{
          height: '100%',
          ...FlexCenter,
        }}
      >
        <img src={logo_img} className={classes.logo} />
      </Link>
      <div className={classes.navLinks}>
        <Link to='#'>Shop</Link>
        <Link to='#'>Contact</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='#'>
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
