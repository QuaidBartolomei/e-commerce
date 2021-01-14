import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { passwordValidator } from 'utils/password.utils';

const NAME = 'Password';

export default function usePasswordField(props: TextFieldProps = {}) {
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState('');

  function validate() {
    const errorMessage = passwordValidator(value);
    setErrorMessage(errorMessage);
    return errorMessage === '';
  }

  const helperText = errorMessage && (
    <span style={{ whiteSpace: 'pre-wrap' }}>{errorMessage}</span>
  );

  const element = (
    <TextField
      type='password'
      label={NAME}
      name={NAME}
      onChange={(e) => setValue(e.target.value)}
      error={Boolean(errorMessage)}
      helperText={helperText}
      {...props}
    />
  );

  return {
    element,
    value,
    validate,
  };
}
