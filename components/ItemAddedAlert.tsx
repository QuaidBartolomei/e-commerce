import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from 'components/Alert';

const useStyles = makeStyles(theme =>
  createStyles({
    ItemAddedAlertContainer: {
      // styles here
    },
  })
);

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
    <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='success'>
        Item added to cart!
      </Alert>
    </Snackbar>
  );
}
