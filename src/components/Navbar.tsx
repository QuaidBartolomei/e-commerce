import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import logo_img from 'assets/logo.svg';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      background: '#888',
      alignItems: 'center',
      padding: '8px 24px',
    },
    logo: {
      height: '48px',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      '&>*': {
        marginLeft: '16px',
      }
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link to='#'>
        <img src={logo_img} className={classes.logo} />
      </Link>
      <div className={classes.navLinks}>
        <Link to='#'>Shop</Link>
        <Link to='#'>Contact</Link>
        <Link to='#'>Sign In</Link>
        <Link to='#'>
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
