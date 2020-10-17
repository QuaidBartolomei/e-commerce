import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import * as EmailValidator from 'email-validator';
import React, { FormEvent, useState } from 'react';
import { registerNewUser } from 'utils/firebase.utils';
import { passwordValidator } from 'utils/password.utils';

interface FieldData {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
  name: string;
  errorMessage: (value: string) => string;
  password?: boolean;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    submitButton: {
      margin: theme.spacing(2, 0),
    },
  })
);
const RegisterForm = () => {
  const classes = useStyles();
  const [showErrors, setShowErrors] = useState(false);

  // Data //

  const fieldData: {
    email: FieldData;
    password: FieldData;
    passwordConfirm: FieldData;
  } = {
    email: {
      name: 'Email',
      errorMessage: (value: string) =>
        EmailValidator.validate(value) ? '' : 'Enter a valid Email',
      state: useState(''),
    },
    password: {
      name: 'Password',
      errorMessage: passwordValidator,
      password: true,
      state: useState(''),
    },
    passwordConfirm: {
      name: 'Confirm Password',
      errorMessage: validateConfirmPassword,
      password: true,
      state: useState(''),
    },
  };

  const fields: FieldData[] = [
    fieldData.email,
    fieldData.password,
    fieldData.passwordConfirm,
  ];

  // Functions //

  function validateConfirmPassword() {
    return fieldData.password.state[0] === fieldData.passwordConfirm.state[0]
      ? ''
      : 'Passwords do not match';
  }

  function checkForErrors(): boolean {
    return fields.find((x) => x.errorMessage(x.state[0]) !== '') !== undefined;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    return (
      checkForErrors() ||
      registerNewUser(fieldData.email.state[0], fieldData.password.state[0])
    );
  }

  // Components //

  const Fields = fields.map(
    ({ name, errorMessage, password, state: [value, setValue] }, key) => (
      <TextField
        margin='normal'
        required
        fullWidth
        type={(password && 'password') || 'text'}
        label={name}
        {...{ name, value, key }}
        error={showErrors && errorMessage(value) !== ''}
        helperText={
          showErrors && (
            <span style={{ whiteSpace: 'pre-wrap' }}>
              {errorMessage(value)}
            </span>
          )
        }
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    )
  );

  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        I don't have an account
      </Typography>
      <Typography>Sign up with an email and password</Typography>

      <form onSubmit={onSubmit}>
        {Fields}

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
