import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useFormikContext } from 'formik';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    EmailFieldContainer: {
      // styles here
    },
  })
);

export default function PasswordField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<{ password: string }>();
  return (
    <TextField
      id='password'
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
