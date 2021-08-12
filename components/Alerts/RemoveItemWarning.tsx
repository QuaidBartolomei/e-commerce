import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useUserDispatch } from 'components/User/user.context';
import { useCart } from '../Cart/useCart';
import AlertDialog from 'components/Alerts/AlertDialog';

const useStyles = makeStyles(theme =>
  createStyles({
    RemoveItemWarningContainer: {
      // styles here
    },
  })
);

interface Props {}

export default function RemoveItemWarning(props: Props) {
  const classes = useStyles();
  const userDispatch = useUserDispatch();
  const cart = useCart();
  return (
    <AlertDialog
      onCancel={() =>
        cart.dispatch({ payload: '', type: 'set_item_to_remove' })
      }
      open={Boolean(cart.itemToRemove)}
      onConfirm={() => {
        userDispatch({
          type: 'remove_item',
          payload: cart.itemToRemove,
        });
      }}
      title='Remove item from cart?'
    />
  );
}
