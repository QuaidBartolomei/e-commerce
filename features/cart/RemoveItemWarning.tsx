import AlertDialog from 'components/AlertDialog';
import React from 'react';
import { removeItem } from 'features/user/userSlice';
import { selectItemToRemove, setItemToRemove } from 'features/cart/cartSlice';
import { useAppSelector } from 'redux/hooks';

interface Props {}

export default function RemoveItemWarning(props: Props) {
  const itemToRemove = useAppSelector(selectItemToRemove);
  return (
    <AlertDialog
      onCancel={() => setItemToRemove('')}
      open={Boolean(itemToRemove)}
      onConfirm={() => {
        removeItem(itemToRemove);
      }}
      title='Remove item from cart?'
    />
  );
}
