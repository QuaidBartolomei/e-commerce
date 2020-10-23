import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import * as EmailValidator from 'email-validator';
import React, { FormEvent, useState } from 'react';
import { registerNewUser } from 'utils/auth.utils';
import { passwordValidator } from 'utils/password.utils';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

const EMAIL_ERROR_MESSAGE = 'Invalid email';
const CONFIRM_PASSWORD_ERROR_MESSAGE = 'Passwords do not match';

const useStyles = makeStyles((theme) =>
  createStyles({
    submitButton: {
      margin: theme.spacing(2, 0),
    },
  })
);
const RegisterForm = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    let formIsValid =
      emailIsValid() && passwordIsValid() && confirmPasswordIsValid();
    if (!formIsValid) return;
    registerNewUser(email, password);
  }

  function emailIsValid(): boolean {
    let result = EmailValidator.validate(email);
    if (!result) {
      setEmailError(EMAIL_ERROR_MESSAGE);
      return false;
    }
    setEmailError('');
    return true;
  }

  function passwordIsValid(): boolean {
    let result = passwordValidator(password);
    setPasswordError(result);
    return result === '';
  }
  function confirmPasswordIsValid(): boolean {
    let result = password === confirmPassword;
    setConfirmPasswordError(result ? '' : CONFIRM_PASSWORD_ERROR_MESSAGE);
    return result;
  }

  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        I don't have an account
      </Typography>
      <Typography>Sign up with an email and password</Typography>

      <form onSubmit={onSubmit}>
        <EmailField
          value={email}
          onChangeValue={setEmail}
          errorMessage={emailError}
        />
        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          error={passwordError}
        />
        <PasswordField
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          error={confirmPasswordError}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submitButton}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
