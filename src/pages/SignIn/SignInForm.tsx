import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';

import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import { signInWithGoogle } from 'firebase.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    submit: {},
  })
);
const SignInForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography component='h1' variant='h5'>
        I already have an account
      </Typography>
      <Typography>Sign in with your email and password</Typography>

      <form noValidate>
        <TextField
          margin='normal'
          required
          fullWidth
          label='Email'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
        <Grid container spacing={2} style={{marginTop: '8px'}}>
          <Grid item xs={6}>
            <Button
              fullWidth
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.submit}
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignInForm;
