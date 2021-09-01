import Container from '@material-ui/core/Container';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import RemoveItemWarning from 'components/Alerts/RemoveItemWarning';
import ShoppingCartItem from 'components/Cart/CartItem/ShoppingCartItem';
import EmptyCart from 'components/Cart/EmptyCart';
import { CartProvider } from 'components/Cart/useCart';
import CheckoutButton from 'components/Forms/Buttons/CheckoutButton';
import { useUserState } from 'components/User/user.context';
import React from 'react';
import { getCartTotal } from 'utils/shopItem.util';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      '&>*': {
        marginTop: theme.spacing(2),
      },
    },
    shopItemsContainer: {
      '&>*': {
        margin: theme.spacing(2),
      },
    },
    subtotal: {
      marginBottom: theme.spacing(2),
    },
    alignRight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  })
);

export default function CartPage() {
  const classes = useStyles();
  const user = useUserState();
  const { cart } = user;
  const cartTotal = getCartTotal(cart);

  const Subtotal = () => (
    <Typography
      variant='h6'
      className={classes.subtotal}
    >{`Subtotal: $${cartTotal}`}</Typography>
  );

  if (cart.length === 0) return <EmptyCart />;

  const ItemCards = () => (
    <div className={classes.shopItemsContainer}>
      {cart.map((item, key) => (
        <ShoppingCartItem item={item} key={key} />
      ))}
    </div>
  );

  return (
    <CartProvider>
      <Container className={classes.container} maxWidth='md'>
        <Typography variant='h4' component='h1'>
          Shopping Cart
        </Typography>
        <ItemCards />
        <div className={classes.alignRight}>
          <Subtotal />
          <CheckoutButton disabled={cart.length === 0} />
        </div>
        <RemoveItemWarning />
      </Container>
    </CartProvider>
  );
}
