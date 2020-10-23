import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useUserDispatch } from 'user/UserContext';
import { CartItemData } from 'interfaces/shop-item.interface';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const UpdateCartButton = ({ cart }: { cart: CartItemData[] }) => {
  const classes = useStyles();
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
