import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import RemoveItemWarning from 'components/Alerts/RemoveItemWarning';
import ShoppingCartItem from 'components/Cart/CartItem/ShoppingCartItem';
import EmptyCart from 'components/Cart/EmptyCart';
import { CartProvider } from 'components/Cart/useCart';
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

  const ItemCards = () => (
    <Box
      sx={{
        '>*': {
          m: 2,
        },
      }}
    >
      {cart.map((item, key) => (
        <ShoppingCartItem item={item} key={key} />
      ))}
    </Box>
  );

  return (
    <CartProvider>
      <Container
        sx={{
          '>*': {
           m: 1,
          },
          mt:2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        maxWidth='md'
      >
        <Typography variant='h4' component='h1'>
          Shopping Cart
        </Typography>
        <ItemCards />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Subtotal />
          <CheckoutButton disabled={cart.length === 0} />
        </Box>
      </Container>
      <RemoveItemWarning />
    </CartProvider>
  );
}
