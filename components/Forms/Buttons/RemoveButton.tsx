import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Button color='secondary' variant='text' onClick={onRemove}>
        Remove
      </Button>
    </Box>
  );
}
