import TextField from '@material-ui/core/TextField';
import React from 'react';

const PasswordField = (props: {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error: string;
}) => {
  const {error, ...otherProps} = props;
  return (
    <TextField
      margin='normal'
      fullWidth
      type='password'
      label='Password'
      name='password'
      {...otherProps}
      error={error !== ''}
      helperText={
        error !== '' && <span style={{ whiteSpace: 'pre-wrap' }}>{error}</span>
      }
    />
  );
};

export default PasswordField;