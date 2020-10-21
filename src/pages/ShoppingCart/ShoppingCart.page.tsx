import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AlertDialog from 'components/AlertDialog';
import CartItemData from 'interfaces/ShopItemData.interface';
import React from 'react';
import { useUserDispatch, useUserState } from 'user/UserContext';
import CheckoutButton from './CheckoutButton';
import EmptyCart from './EmptyCart.page';
import ItemCard from './ItemCard';
import UpdateCartButton from './UpdateCartButton';

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
  const cartTotal = React.useMemo(() => {
    return cart.reduce((total, x) => total + x.price * x.quantity, 0);
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

  return (
    <Container className={classes.container} maxWidth='md'>
      <Grid container spacing={2} className={classes.grid}>
        {cart.map((item: CartItemData, key) => (
          <Grid item key={key} xs={12}>
            <ItemCard
              {...{ item }}
              onRemove={() => setItemToRemove(item.id)}
              onChangeQuantity={(quantity) =>
                changeItemQuantity(item.id, quantity)
              }
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.alignRight}>
        <Subtotal />
        <CheckoutButton disabled={cart.length === 0} />
      </div>
      <AlertDialog
        onCancel={() => setItemToRemove('')}
        open={Boolean(itemToRemove)}
        onConfirm={() => {
          removeItemFromCart(itemToRemove);
          setItemToRemove('');
        }}
        title='Remove item from cart?'
      />
    </Container>
  );
}
