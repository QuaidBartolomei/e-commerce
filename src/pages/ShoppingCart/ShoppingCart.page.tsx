import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AlertDialog from 'components/AlertDialog';
import { CartItemData } from 'interfaces/ShopItemData.interface';
import React, { useState } from 'react';
import { useUserDispatch, useUserState } from 'user/UserContext';
import { getCartTotal } from 'utils/db.utils';
import CheckoutButton from './CheckoutButton';
import EmptyCart from './EmptyCart.page';
import ItemCard from './ItemCard';

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
  const [itemToRemove, setItemToRemove] = React.useState('');
  const userDispatch = useUserDispatch();
  const user = useUserState();
  const { cart } = user;
  const [cartTotal, setCartTotal] = useState(0);

  React.useEffect(() => {
    getCartTotal(cart).then(setCartTotal);
  }, [cart]);

  const Subtotal = () => (
    <Typography
      variant='h6'
      className={classes.subtotal}
    >{`Subtotal: $${cartTotal.toFixed(2)}`}</Typography>
  );

  function removeItemFromCart(id: string) {
    userDispatch({
      type: 'remove_item',
      payload: id,
    });
  }

  function changeItemQuantity(id: string, quantity: number) {
    userDispatch({ type: 'change_item_quantity', payload: { id, quantity } });
  }

  if (cart.length === 0) return <EmptyCart />;

  const RemoveItemWarning = () => (
    <AlertDialog
      onCancel={() => setItemToRemove('')}
      open={Boolean(itemToRemove)}
      onConfirm={() => {
        removeItemFromCart(itemToRemove);
        setItemToRemove('');
      }}
      title='Remove item from cart?'
    />
  );

  const ItemCards = () => (
    <Grid container spacing={2} className={classes.grid}>
      {cart.map((item: CartItemData, key) => (
        <Grid item key={key} xs={12}>
          <ItemCard
            {...item}
            onRemove={() => setItemToRemove(item.id)}
            onChangeQuantity={(quantity) =>
              changeItemQuantity(item.id, quantity)
            }
          />
        </Grid>
      ))}
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
