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
      padding: '0 8px',
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
