import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';
import { useCart } from './Cart/useCart';

interface Props {
  open?: boolean;
  title?: string;
  text?: string;
  onCancel?: () => void;
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

  const [openState, setOpenState] = useState(open);

  const {itemToRemove} = useCart()

  return (
    <Dialog
      open={openState}
      onClose={onCancel}
      aria-labelledby='alert-dialog-title'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpenState(false)} color='primary'>
          Cancel
        </Button>
        <Button onClick={onConfirm} color='primary' autoFocus>
          {text}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
