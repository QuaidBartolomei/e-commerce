import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  TextFieldProps
} from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import useEmailField from 'components/form-inputs/useEmailField';
import usePasswordField from 'components/form-inputs/usePasswordField';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';
import { signInWithEmail } from 'utils/auth.utils';
import firebase, { signInWithGoogle } from 'utils/firebase.utils';

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
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const textFieldOptions: TextFieldProps = {
    margin: 'normal',
    fullWidth: true,
  };

  const email = useEmailField(textFieldOptions);
  const password = usePasswordField(textFieldOptions);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('on submit');
    await signInWithEmail(email.value, password.value);
    setLoggedIn(Boolean(firebase.auth().currentUser));
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
      {loggedIn && <div>SUCCESS</div>}
      <Typography component='h1' variant='h5'>
        I already have an account
      </Typography>
      <Typography>Sign in with your email and password</Typography>

      <form onSubmit={onSubmit}>
        {email.element}
        {password.element}

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
