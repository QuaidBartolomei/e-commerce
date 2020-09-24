import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserDispatch, useUserState } from 'UserContext';
import ShoppingCartIcon from './ShoppingCartIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const navbarHeight = 96;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: navbarHeight,
      height: 'fit-content',
      backgroundColor: theme.palette.grey[600],
      color: theme.palette.primary.contrastText,
      '&>*': {
        height: '100%',
      },
      padding: theme.spacing(1, 4),
    },
    logoContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '100%',
      maxWidth: '100%',
      fill: theme.palette.primary.contrastText,
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
  })
);

const Navbar = () => {
  const classes = useStyles();
  const user = useUserState();

  const LogoLink = (
    <Link to={Routes.Homepage} className={classes.logoContainer}>
      <Logo className={classes.logo} stroke='white' strokeWidth={2} />
    </Link>
  );

  const Title = (
    <Link to={Routes.Homepage}>
      <Typography component='h1' variant='h4'>
        CAB Clothing
      </Typography>
    </Link>
  );

  const UserButton = user.isAuth ? (
    <SignOutButton />
  ) : (
    <Link to={Routes.SignIn} style={{height:24}}>
      <AccountCircleIcon />
    </Link>
  );

  const ShoppingCartLink = (
    <Link to={Routes.Checkout}>
      <ShoppingCartIcon />
    </Link>
  );

  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid container>
        <Grid item xs={4}>
          {LogoLink}
        </Grid>
        <Grid item xs={4} className={classes.titleContainer}>
          {Title}
        </Grid>
        <Grid item xs={4} className={classes.navLinks}>
          {UserButton}
          {ShoppingCartLink}
        </Grid>
      </Grid>
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
