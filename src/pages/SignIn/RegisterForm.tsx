import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import * as EmailValidator from 'email-validator';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { registerNewUser } from 'utils/firebase.utils';
import { passwordValidator } from 'utils/password.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    submitButton: {
      margin: theme.spacing(2, 0),
    },
  })
);

type FormFields = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterForm = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, control, errors } = useForm<
    FormFields
  >({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const { password, passwordConfirm } = watch();

  const onSubmit = handleSubmit(async (data: FormFields) => {
    console.log('data', data);
    await registerNewUser(data.email, data.password);
  });

  function validatePassword() {
    return passwordValidator(password, { maxLength: 99, minLength: 8 }).error;
  }

  const Head = () => (
    <React.Fragment>
      <Typography component='h1' variant='h5'>
        I don't have an account
      </Typography>
      <Typography>Sign up with your email and password</Typography>
    </React.Fragment>
  );

  const EmailField = (
    <Controller
      name='email'
      control={control}
      rules={{
        validate: EmailValidator.validate,
        required: true,
      }}
      render={() => (
        <TextField
          label='Email'
          autoComplete='email'
          margin='normal'
          fullWidth
          autoFocus
          helperText={errors.email && errors.email.message}
        />
      )}
    />
  );

  const PasswordField = (
    <Controller
      name='password'
      control={control}
      rules={{
        required: 'You must specify a password',
        validate: validatePassword,
      }}
      render={({ name }) => (
        <TextField
          label='Password'
          type='password'
          margin='normal'
          fullWidth
          helperText={errors.password && errors.password.message}
        />
      )}
    />
  );

  const PasswordConfirmField = (
    <Controller
      name='passwordConfirm'
      control={control}
      rules={{
        required: 'You must specify a password',
        validate: (value) => {
          if (value === password) {
            return true;
          } else {
            return 'The passwords do not match';
          }
        },
      }}
      render={({ name }) => (
        <TextField
          type='password'
          label='Confirm Password'
          margin='normal'
          fullWidth
          helperText={errors.passwordConfirm && errors.passwordConfirm.message}
        />
      )}
    />
  );

  const SubmitButton = (
    <Button
      type='submit'
      variant='contained'
      color='secondary'
      className={classes.submitButton}
    >
      Sign Up
    </Button>
  );

  return (
    <Container>
      <Head />
      <form onSubmit={onSubmit}>
        {EmailField}
        {PasswordField}
        {PasswordConfirmField}
        {SubmitButton}
      </form>
    </Container>
  );
};

export default RegisterForm;
