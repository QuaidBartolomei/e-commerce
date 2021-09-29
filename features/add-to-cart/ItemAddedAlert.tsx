import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

export type ItemAddedAlertProps = {
  show?: boolean;
};

export default function ItemAddedAlert({ show = false }: ItemAddedAlertProps) {
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    setShowAlert(show);
  }, [show]);

  function handleClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') return;
    setShowAlert(false);
  }

  return (
    <Snackbar
      open={showAlert}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant='filled'
        onClose={handleClose}
        severity='success'
      >
        Item added to cart!
      </Alert>
    </Snackbar>
  );
}
