import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AlertDialog from 'components/AlertDialog';
import { getCartTotal } from 'apis/shopItem.api';
import React, { useState } from 'react';
import { useUserDispatch, useUserState } from 'UserContext';
import CheckoutButton from './CheckoutButton';
import EmptyCart from './EmptyCart.page';
import ShoppingCartItem from './ShoppingCartItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      minHeight: '100%',
      margin: theme.spacing(2, 0),
    },
    grid: {
      padding: theme.spacing(2, 0),
    },
    buttonContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
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
  const [itemToRemove, setItemToRemove] = useState('');
  const [cartTotal, setCartTotal] = useState(0);
  const userDispatch = useUserDispatch();
  const user = useUserState();

  const { cart } = user;

  React.useEffect(() => {
    getCartTotal(cart).then(setCartTotal);
  }, [cart]);

  console.log('shoppingCart', cart);

  const Subtotal = () => (
    <Typography
      variant='h6'
      className={classes.subtotal}
    >{`Subtotal: $${cartTotal.toFixed(2)}`}</Typography>
  );

  if (cart.length === 0) return <EmptyCart />;

  const RemoveItemWarning = () => (
    <AlertDialog
      onCancel={() => setItemToRemove('')}
      open={Boolean(itemToRemove)}
      onConfirm={() => {
        userDispatch({
          type: 'remove_item',
          payload: itemToRemove,
        });
        setItemToRemove('');
      }}
      title='Remove item from cart?'
    />
  );

  const ItemCards = () => (
    <Grid container spacing={2} className={classes.grid}>
      {cart.map((item, key) => {
        return (
          <Grid item key={key} xs={12}>
            <ShoppingCartItem itemData={item} />
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <Container className={classes.container} maxWidth='md'>
      <ItemCards />
      <div className={classes.alignRight}>
        <Subtotal />
        <CheckoutButton disabled={cart.length === 0} />
      </div>
      <RemoveItemWarning />
    </Container>
  );
}
