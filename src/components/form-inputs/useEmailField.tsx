import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import * as EmailValidator from 'email-validator';
import React, { useState } from 'react';

const ERROR_MESSAGE = 'Invalid email';
const NAME = 'Email';

export default function useEmailField() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  function validate(): boolean {
    const isValid = EmailValidator.validate(value);
    setError(!isValid);
    return isValid;
  }

  const Element = (props: TextFieldProps) => (
    <TextField
      type='text'
      label={NAME}
      name={NAME}
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
