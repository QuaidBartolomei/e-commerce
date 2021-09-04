import TextField from '@material-ui/core/TextField';
import { useFormikContext } from 'formik';
import React from 'react';

export default function EmailField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<{ email: string }>();
  return (
    <TextField
      margin='normal'
      id='email'
      label='Email'
      variant='outlined'
      value={values.email}
      onChange={handleChange}
      error={touched.email && Boolean(errors.email)}
      helperText={touched.email && errors.email}
    />
  );
}
