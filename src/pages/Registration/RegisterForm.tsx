import { TextFieldProps } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import useConfirmPasswordField from 'components/form-inputs/useConfirmPasswordField';
import useEmailField from 'components/form-inputs/useEmailField';
import usePasswordField from 'components/form-inputs/usePasswordField';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    submitButton: {
      margin: theme.spacing(2, 0),
    },
  })
);
export default function RegisterForm() {
  const classes = useStyles();

  const textFieldOptions: TextFieldProps = {
    margin: 'normal',
    fullWidth: true,
  };

  const email = useEmailField();
  const password = usePasswordField();
  const confirmPassword = useConfirmPasswordField();

  function validateForm() {
    return [
      email.validate(),
      password.validate(),
      confirmPassword.validate(password.value),
    ].every(Boolean);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = validateForm();
    const data = { email: email.value, password: password.value };
    console.log('form is valid: ', isValid);
    console.log('data', data);
  }

  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        I don't have an account
      </Typography>
      <Typography>Sign up with an email and password</Typography>

      <form onSubmit={onSubmit}>
        <email.Element {...textFieldOptions} />
        <password.Element {...textFieldOptions} />
        <confirmPassword.Element {...textFieldOptions} />
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
}
