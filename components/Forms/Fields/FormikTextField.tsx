import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useField } from 'formik';
import React from 'react';

export type FormikTextFieldProps = {
  // props
} & TextFieldProps;

export function FormikTextField(props: FormikTextFieldProps) {
  const { name = 'MISSING_NAME' } = props;
  const [field, meta,helpers] = useField(name);
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
