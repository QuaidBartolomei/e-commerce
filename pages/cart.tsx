import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RemoveItemWarning from 'features/cart/RemoveItemWarning';
import EmptyCart from 'features/cart/EmptyCart';
import { FlexCol } from 'components/Flexbox';
import CheckoutButton from 'features/checkout/CheckoutButton';
import React from 'react';
import { getCartTotal } from 'utils/shopItem.util';
import CartItem from 'features/cart/CartItem/CartItem';
import { useAppSelector } from 'redux/hooks';
import { selectCart } from 'features/user/userSlice';

export default function CartPage() {
  const cart = useAppSelector(selectCart);
  const cartTotal = getCartTotal(cart);

  const Subtotal = () => (
    <Typography
      variant='h6'
      sx={{
        mb: 2,
      }}
    >{`Subtotal: $${cartTotal}`}</Typography>
  );

  if (cart.length === 0) return <EmptyCart />;

  const CartItems = () => (
    <Stack spacing={3} divider={<Divider flexItem />}>
      {cart.map((item, key) => (
        <CartItem item={item} key={key} />
      ))}
    </Stack>
  );

  return (
    <>
      <Container maxWidth='md'>
        <Stack
          spacing={4}
          direction='column'
          alignItems='center'
          sx={{
            mt: 2,
            mb: 4,
          }}
        >
          <Typography variant='h4' component='h1'>
            Shopping Cart
          </Typography>
          <CartItems />
          <FlexCol
            sx={{
              width: '100%',
            }}
            align='end'
          >
            <Subtotal />
            <CheckoutButton disabled={cart.length === 0} />
          </FlexCol>
        </Stack>
      </Container>
      <RemoveItemWarning />
    </>
  );
}
