import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signInWithGoogle } from 'utils/firebase.utils';

type FormFields = {
  email: string;
  password: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    submit: {},
  })
);
const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const onSubmit = (data: FormFields) => {
    console.log('data', data);
  };
  const classes = useStyles();

  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        I already have an account
      </Typography>
      <Typography>Sign in with your email and password</Typography>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin='normal'
          required
          fullWidth
          label='Email'
          name='email'
          type='email'
          autoComplete='email'
          inputRef={register}
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          inputRef={register}
          autoComplete='current-password'
        />
        <Grid container spacing={2} style={{ marginTop: '8px' }}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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
    </Container>
  );
};

export default SignInForm;
