import AlertDialog from 'components/Alerts/AlertDialog';
import { useUserDispatch } from 'components/User/user.context';
import React from 'react';
import { useCart } from '../Cart/useCart';

interface Props {}

export default function RemoveItemWarning(props: Props) {
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
