import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ShoppingCartItem from 'components/Cart/CartItem/ShoppingCartItem';
import CheckoutButton from 'components/Cart/CheckoutButton';
import EmptyCart from 'components/Cart/EmptyCart';
import RemoveItemWarning from 'components/Cart/RemoveItemWarning';
import { CartProvider } from 'components/Cart/useCart';
import { useUserState } from 'components/User/user.context';
import React, { useState } from 'react';
import { getCartTotal } from 'utils/shopItem.util';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: '100%',
      margin: theme.spacing(2, 0),
    },
    grid: {
      padding: theme.spacing(2, 0),
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

export default function ShoppingCart() {
  const classes = useStyles();
  const [cartTotal, setCartTotal] = useState(0);
  const user = useUserState();

  const { cart } = user;

  React.useEffect(() => {
    getCartTotal(cart).then(setCartTotal);
  }, [cart]);

  const Subtotal = () => (
    <Typography
      variant='h6'
      className={classes.subtotal}
    >{`Subtotal: $${cartTotal.toFixed(2)}`}</Typography>
  );

  if (cart.length === 0) return <EmptyCart />;

  const ItemCards = () => (
    <Grid container spacing={2} className={classes.grid}>
      {cart.map((item, key) => {
        return (
          <Grid item key={key} xs={12}>
            <ShoppingCartItem item={item} />
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <CartProvider>
      <Container className={classes.container} maxWidth='md'>
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
