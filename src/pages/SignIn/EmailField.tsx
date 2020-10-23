import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const EmailField = (
  props: TextFieldProps & {
    onChangeValue: (email: string) => void;
    errorMessage?: string;
  }
) => {
  const { errorMessage = '', onChangeValue, ...otherProps } = props;
  return (
    <TextField
      margin='normal'
      fullWidth
      type='text'
      label='Email'
      name='Email'
      value={props.value}
      onChange={(e) => onChangeValue(e.currentTarget.value)}
      error={errorMessage !== ''}
      helperText={props.error}
      {...otherProps}
    />
  );
};

export default EmailField;
