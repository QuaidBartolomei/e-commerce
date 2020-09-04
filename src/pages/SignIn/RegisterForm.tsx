import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import { useForm } from 'react-hook-form';

import * as EmailValidator from 'email-validator';
import { passwordValidator } from 'utils/password.utils';

type FormFields = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const HelperText = {
  lowercase: 'Passwords must contain at least 1 lowercase letter.',
  uppercase: 'Passwords must contain at least 1 uppercase letter.',
  number: 'Passwords must contain at least 1 number.',
  characters:
    'Passwords may only use the following special characters !@#$%^&*.?',
  length: 'Passwords must be between 8 and 60 characters long',
};

const defaultHelperText = [
  HelperText.lowercase,
  HelperText.uppercase,
  HelperText.number,
  HelperText.characters,
];

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm<FormFields>();
  const [passwordState, setPasswordState] = useState({
    error: false,
    helperText: defaultHelperText,
  });
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  console.log('password', password);

  useEffect(() => {
    if (password === '' || passwordConfirm === '') return;
    setPasswordState({ error: false, helperText: [] });
    if (password !== passwordConfirm)
      return setPasswordState({
        error: true,
        helperText: ['Passwords do not match'],
      });
    let helperText: string[] = [];
    let validation = passwordValidator(password, {
      minLength: 8,
      maxLength: 60,
    });
    if (!validation.hasLowercase) helperText.push(HelperText.lowercase);
    if (!validation.hasUppercase) helperText.push(HelperText.uppercase);
    if (!validation.hasNumber) helperText.push(HelperText.number);
    if (!validation.isCorrectLength) helperText.push(HelperText.length);
    if (!validation.hasCorrectCharacters)
      helperText.push(HelperText.characters);
    let error = helperText.length > 0;
    return setPasswordState({
      error,
      helperText,
    });
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
          helperText={
            <div style={{ whiteSpace: 'pre-wrap' }}>
              {passwordState.helperText.join('\n')}
            </div>
          }
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <TextField
          margin='normal'
          required
          fullWidth
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
