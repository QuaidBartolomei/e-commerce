import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { removeItem } from 'features/user/userSlice';
import React from 'react';
import { useAppDispatch } from 'redux/hooks';

export type RemoveButtonProps = {
  itemId: string;
};

export default function RemoveButton({ itemId }: RemoveButtonProps) {
  const dispatch = useAppDispatch();
  function onRemove() {
    dispatch(removeItem(itemId));
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
