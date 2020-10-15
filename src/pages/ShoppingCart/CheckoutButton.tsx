import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Routes } from 'Router';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
    checkoutButton: {
      margin: theme.spacing(2, 0, 4),
    },
  })
);

const CheckoutButton = (props: { disabled?: boolean }) => {
  const classes = useStyles();
  const disabled = props.disabled || false;
  return (
    <Button
      href={Routes.Checkout}
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
