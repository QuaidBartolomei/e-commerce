import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React, { useState } from 'react';

const ERROR_MESSAGE = 'Passwords do not match';
const name = 'Confirm Password';

export default function useConfirmPasswordField() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  function validate(passwordToMatch: string): boolean {
    const isValid = value === passwordToMatch;
    setError(!isValid);
    return isValid;
  }

  const Element = (props: TextFieldProps) => (
    <TextField
      type='password'
      label={name}
      name={name}
      onChange={(e) => setValue(e.target.value)}
      error={error}
      helperText={error ? ERROR_MESSAGE : ''}
      {...props}
    />
  );

  return {
    Element,
    value,
    validate,
  };
}
