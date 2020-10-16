import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

export default function AlertDialog(props: {
  open?: boolean;
  dialog?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const open = props.open || false;
  const { dialog, onCancel, onConfirm, confirmText } = props;
  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby='alert-dialog-title'>
      <DialogTitle id='alert-dialog-title'>{dialog || 'Alert'}</DialogTitle>

      <DialogActions>
        <Button onClick={onCancel} color='primary'>
          Cancel
        </Button>
        <Button onClick={onConfirm} color='primary' autoFocus>
          {confirmText || 'Confirm'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
