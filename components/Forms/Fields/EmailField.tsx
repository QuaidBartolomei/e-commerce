import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import { LoginFormData } from './login.form';

const useStyles = makeStyles(theme =>
  createStyles({
    EmailFieldContainer: {
      // styles here
    },
  })
);

export default function EmailField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<LoginFormData>();
  return (
    <TextField
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
