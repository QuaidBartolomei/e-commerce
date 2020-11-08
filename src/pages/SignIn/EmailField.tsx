import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

type Props = TextFieldProps & {
  errorMessage?: string;
  onChangeValue: (email: string) => void;
};

const EmailField = (props: Props) => {
  const { errorMessage = '', onChangeValue, ...otherProps } = props;
  return (
    <TextField
      data-testid='emailInput'
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
