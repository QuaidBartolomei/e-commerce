import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SignInForm from './SignInForm';
import RegisterForm from './RegisterForm';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(8),
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
    <Container className={classes.container}>
      <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={12} md={6}>
          <SignInForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <RegisterForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
