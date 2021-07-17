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

export default function ConfirmPasswordField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<{ confirmPassword: string }>();
  return (
    <TextField
      id='confirmPassword'
      label='Confirm Password'
      variant='outlined'
      name='confirmPassword'
      type='password'
      value={values.confirmPassword}
      onChange={handleChange}
      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
      helperText={touched.confirmPassword && errors.confirmPassword}
    />
  );
}
