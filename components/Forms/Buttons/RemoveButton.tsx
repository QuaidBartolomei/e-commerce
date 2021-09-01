import Button from '@material-ui/core/Button';
import { useUserDispatch } from 'components/User/user.context';
import React from 'react';

export type RemoveButtonProps = {
  itemId: string;
};

export default function RemoveButton({ itemId }: RemoveButtonProps) {
  const userDispatch = useUserDispatch();

  function onRemove() {
    userDispatch({
      type: 'remove_item',
      payload: itemId,
    });
  }
  return (
    <Button color='secondary' onClick={onRemove} variant='outlined'>
      Remove
    </Button>
  );
}
