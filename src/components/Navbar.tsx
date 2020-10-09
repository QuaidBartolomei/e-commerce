import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserState } from 'UserContext';
import ShoppingCartIcon from './ShoppingCartIcon';
import SignOutButton from './SignOutButton';

export const navbarHeight = 96;

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
      padding: theme.spacing(1, 4),
    },
    grid: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    logoContainer: {
      height: '100%',
    },
    logo: {
      height: 64,
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
    <Container maxWidth={false} className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item xs={4} className={classes.logoContainer}>
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
