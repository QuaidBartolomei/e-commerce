import Button from '@mui/material/Button';
import React from 'react';
import routes from 'utils/routes';

const CheckoutButton = (props: { disabled?: boolean }) => {
  const disabled = props.disabled || false;
  return (
    <Button
      href={routes.checkout}
      variant='contained'
      color='primary'
      disabled={disabled}
    >
      {'Proceed to Checkout'}
    </Button>
  );
};

export default CheckoutButton;
