import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import RemoveItemWarning from 'components/Alerts/RemoveItemWarning';
import CartItem from 'components/Cart/CartItem/CartItem';
import EmptyCart from 'components/Cart/EmptyCart';
import { CartProvider } from 'components/Cart/useCart';
import { FlexCol } from 'components/Flexbox';
import CheckoutButton from 'components/Forms/Buttons/CheckoutButton';
import { useUserState } from 'components/User/user.context';
import React from 'react';
import { getCartTotal } from 'utils/shopItem.util';

export default function CartPage() {
  const user = useUserState();
  const { cart } = user;
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
    <CartProvider>
      <Container maxWidth='md'>
        <Stack
        spacing={4}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{
            mt: 2,
            mb: 4,
          }}
        >
          <Typography
            variant='h4'
            component='h1'
          >
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
    </CartProvider>
  );
}
