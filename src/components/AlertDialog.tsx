import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

interface Props {
  open?: boolean;
  title?: string;
  text?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function AlertDialog(props: Props) {
  const {
    open = false,
    title = 'Alert',
    text = 'Confirm',
    onCancel,
    onConfirm,
  } = props;
  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby='alert-dialog-title'>
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={onCancel} color='primary'>
          Cancel
        </Button>
        <Button onClick={onConfirm} color='primary' autoFocus>
          {text}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
