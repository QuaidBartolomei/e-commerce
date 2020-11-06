import Button from '@material-ui/core/Button';
import React from 'react';
import { CartItem, useUserDispatch } from 'UserContext';

const UpdateCartButton = ({ cart }: { cart: CartItem[] }) => {
  const userDispatch = useUserDispatch();
  return (
    <Button
      variant='outlined'
      onClick={() => {
        userDispatch({
          type: 'update_cart',
          payload: cart.filter((x) => x.quantity > 0),
        });
      }}
    >
      {'Update Cart'}
    </Button>
  );
};

export default UpdateCartButton;
