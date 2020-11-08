import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';
import { signInWithEmail } from 'utils/auth.utils';
import { signInWithGoogle } from 'utils/firebase.utils';
import EmailField from './EmailField';

const useStyles = makeStyles((theme) =>
  createStyles({
    submit: {},
    buttonGrid: {
      marginTop: theme.spacing(1),
    },
  })
);
const SignInForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('on submit');
    let auth = await signInWithEmail(email, password);
    history.push(Routes.Homepage);
  }

  const SignInButton = () => (
    <Button
      fullWidth
      type='submit'
      variant='contained'
      color='primary'
      className={classes.submit}
    >
      Sign In
    </Button>
  );
  const SignInWithGoogleButton = () => (
    <Button
      fullWidth
      variant='contained'
      color='secondary'
      className={classes.submit}
      onClick={signInWithGoogle}
    >
      Sign In With Google
    </Button>
  );

  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        I already have an account
      </Typography>
      <Typography>Sign in with your email and password</Typography>

      <form noValidate onSubmit={onSubmit}>
        <EmailField value={email} onChangeValue={setEmail} autoFocus />
        <TextField
          data-testid='passwordInput'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          autoComplete='current-password'
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <Grid container spacing={2} className={classes.buttonGrid}>
          <Grid item xs={12} sm={6}>
            <SignInButton />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignInWithGoogleButton />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignInForm;
