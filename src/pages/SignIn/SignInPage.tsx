import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { navbarHeight } from 'components/Navbar';
import SignInForm from './SignInForm';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      minHeight: `calc(100vh - ${navbarHeight})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 8px',
    },
    gridItem: {},
  })
);
const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <SignInForm />
        </Grid>
        <Grid item xs={6}>
          <RegisterForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
