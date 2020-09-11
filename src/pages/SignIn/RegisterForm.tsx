import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import * as EmailValidator from 'email-validator';
import React, { useEffect, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { passwordValidator, defaultHelperText } from 'utils/password.utils';

type FormFields = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passFieldFocus, setPassFieldFocus] = useState(false);

  const passwordState = useMemo<{
    error: boolean;
    helperText: string[];
  }>(() => {
    if (password === '')
      return {
        error: false,
        helperText: defaultHelperText,
      };
    if (password !== passwordConfirm && passwordConfirm !== '')
      return {
        error: true,
        helperText: ['Passwords do not match'],
      };
    let validation = passwordValidator(password, {
      minLength: 8,
      maxLength: 60,
    });
    return {
      error: validation.error,
      helperText: validation.errorMessages,
    };
  }, [password, passwordConfirm]);

  const onSubmit = (data: FormFields) => {
    console.log('data', data);
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
          error={passwordState.error}
          onFocus={() => setPassFieldFocus(true)}
          onBlur={() => setPassFieldFocus(false)}
          helperText={
            passFieldFocus ? (
              <span style={{ whiteSpace: 'pre-wrap' }}>
                {passwordState.helperText.join('\n')}
              </span>
            ) : (
              ''
            )
          }
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          disabled={!password}
          name='passwordConfirm'
          label='Confirm Password'
          type='password'
          inputRef={register}
          error={passwordState.error}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.currentTarget.value)}
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
