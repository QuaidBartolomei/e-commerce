import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useField, useFormikContext } from 'formik';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    EmailFieldContainer: {
      // styles here
    },
  })
);

function FormikTextField(props: TextFieldProps) {
  const { name = 'MISSING_NAME' } = props;
  const [field, meta, helpers] = useField(name);
  const { touched, error } = meta;

  return (
    <TextField
      {...props}
      {...field}
      error={touched && Boolean(error)}
      helperText={touched && error}
    />
  );
}

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
