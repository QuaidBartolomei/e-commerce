import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React, { useState } from 'react';


export default function useTextField(name:string,validator:(value:string)=>string) {
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState('');

  function validate() {
    const errorMessage = validator(value);
    setErrorMessage(errorMessage);
    return errorMessage === '';
  }

  const helperText = errorMessage && (
    <span style={{ whiteSpace: 'pre-wrap' }}>{errorMessage}</span>
  );

  const Element = (props: TextFieldProps) => (
    <TextField
      label={name}
      name={name}
      onChange={(e) => setValue(e.target.value)}
      error={Boolean(errorMessage)}
      helperText={helperText}
      {...props}
    />
  );

  return {
    Element,
    value,
    validate,
  };
}
