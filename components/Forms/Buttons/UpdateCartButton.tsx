import Button from '@mui/material/Button';
import { useUserState, useUserDispatch } from 'components/User/user.context';
import React from 'react';

const UpdateCartButton = () => {
  const { cart } = useUserState();
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
