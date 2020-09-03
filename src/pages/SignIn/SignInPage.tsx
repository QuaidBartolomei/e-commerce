import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SignInForm from './SignInForm';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    grid: {
      width: '100%',
    },
    gridItem: {},
  })
);
const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={12} sm={6}>
          <SignInForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RegisterForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
