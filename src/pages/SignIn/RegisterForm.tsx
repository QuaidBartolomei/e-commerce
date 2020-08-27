import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const RegisterForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography component='h1' variant='h5'>
        I don't have an account
      </Typography>
      <Typography>Sign up with your email and password</Typography>

      <form noValidate>
        <TextField
          margin='normal'
          required
          fullWidth
          name='name'
          label='Display Name'
          type='text'
        />
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
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='confirm-password'
          label='Confirm Password'
          type='password'
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              type='submit'
              variant='contained'
              color='secondary'
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterForm;
