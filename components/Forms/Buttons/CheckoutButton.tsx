import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import routes from 'utils/routes';

const useStyles = makeStyles((theme) =>
  createStyles({
    checkoutButton: {
    },
  })
);

const CheckoutButton = (props: { disabled?: boolean }) => {
  const classes = useStyles();
  const disabled = props.disabled || false;
  return (
    <Button
      href={routes.checkout}
      className={classes.checkoutButton}
      variant='contained'
      color='primary'
      disabled={disabled}
    >
      {'Proceed to Checkout'}
    </Button>
  );
};

export default CheckoutButton;
