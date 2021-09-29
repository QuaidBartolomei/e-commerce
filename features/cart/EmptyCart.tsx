import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import routes from 'utils/routes';

const EmptyCart = () => {
  return (
    <Stack
      direction='column'
      alignItems='center'
      spacing={2}
      sx={{
        height: '100%',
      }}
    >
      <Typography variant='h5'>Cart is empty</Typography>
      <Button color='primary' variant='contained' href={routes.index}>
        Go to Shop
      </Button>
    </Stack>
  );
};

export default EmptyCart;
