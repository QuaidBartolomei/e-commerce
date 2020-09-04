import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import { useForm } from 'react-hook-form';

import * as EmailValidator from 'email-validator';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     container: {},
//   })
// );
//   const classes = useStyles();

type FormFields = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm<FormFields>();
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const onSubmit = (data: FormFields) => {
    console.log('data', data);
    setPasswordsMatch(data.password === data.passwordConfirm);
    setEmailIsValid(EmailValidator.validate(data.email)); // true
  };
  return (
    <div>
      <Typography component='h1' variant='h5'>
        I don't have an account
      </Typography>
      <Typography>Sign up with your email and password</Typography>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin='normal'
          required
          fullWidth
          label='Email'
          name='email'
          autoComplete='email'
          autoFocus
          inputRef={register}
          error={!emailIsValid}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          inputRef={register}
          error={!passwordsMatch}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='passwordConfirm'
          label='Confirm Password'
          type='password'
          inputRef={register}
          error={!passwordsMatch}
        />
        <Grid container spacing={2} style={{ marginTop: '8px' }}>
          <Grid item xs={12} sm={6}>
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
