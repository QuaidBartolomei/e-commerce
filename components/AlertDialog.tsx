import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useState } from 'react'

interface Props {
  open?: boolean
  title?: string
  text?: string
  onCancel?: () => void
  onConfirm: () => void
}

export default function AlertDialog(props: Props) {
  const {
    open = false,
    title = 'Alert',
    text = 'Confirm',
    onCancel,
    onConfirm,
  } = props

  const [openState, setOpenState] = useState(open)

  return (
    <Dialog
      open={openState}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpenState(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          {text}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
