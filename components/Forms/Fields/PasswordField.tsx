import TextField from '@mui/material/TextField';
import { useFormikContext } from 'formik';
import React from 'react';

export default function PasswordField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<{ password: string }>();
  return (
    <TextField
      id='password'
      margin='normal'
      label='Password'
      variant='outlined'
      name='password'
      type='password'
      value={values.password}
      onChange={handleChange}
      error={touched.password && Boolean(errors.password)}
      helperText={touched.password && errors.password}
    />
  );
}
