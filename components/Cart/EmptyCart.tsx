import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import routes from 'utils/routes';

const EmptyCart = () => {
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '>*': {
          my: 2,
        },
      }}
    >
      <Typography variant='h5'>Cart is empty</Typography>
      <Button color='primary' variant='contained' href={routes.index}>
        Go to Shop
      </Button>
    </Container>
  );
};

export default EmptyCart;
