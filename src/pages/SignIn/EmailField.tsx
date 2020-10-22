import TextField from '@material-ui/core/TextField';
import React from 'react';

const EmailField = (props: {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error: string;
}) => (
  <TextField
    margin='normal'
    fullWidth
    type='text'
    label='Email'
    name='Email'
    value={props.value}
    onChange={props.onChange}
    error={props.error !== ''}
    helperText={props.error}
  />
);

export default EmailField;
