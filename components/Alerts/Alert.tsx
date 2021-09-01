import MuiAlert, { AlertProps } from '@material-ui/core/Alert';
import React from 'react';

export default function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

