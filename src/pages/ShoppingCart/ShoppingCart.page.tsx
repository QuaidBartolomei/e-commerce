import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CartItemData from 'interfaces/ShopItemData.interface';
import React from 'react';
import { useUserDispatch, useUserState } from 'UserContext';
import CheckoutButton from './CheckoutButton';
import ItemCard from './ItemCard';
import UpdateCartButton from './UpdateCartButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      minHeight: '100%',
    },
    grid: {
      padding: theme.spacing(2, 0),
    },
    buttonContainer: {
      margin: theme.spacing(3, 0),
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  })
);

export default function ShoppingCart() {
  const classes = useStyles();
  const user = useUserState();
  const userDispatch = useUserDispatch();
  const [cart, setCart] = React.useState(user.cart);
  const cartTotal = React.useMemo(() => {
    return cart.reduce((total, x) => total + x.price * x.quantity, 0);
  }, [cart]);

  const Subtotal = (
    <Typography variant='h6'>{`Subtotal: $${cartTotal.toFixed(2)}`}</Typography>
  );

  function removeItemFromCart(item: CartItemData) {
    userDispatch({
      type: 'remove_item',
      payload: item.id,
    });
  }

  function changeItemQuantity(item: CartItemData, quantity: number) {
    setCart([
      ...cart.filter((x) => x.id !== item.id),
      {
        ...item,
        quantity,
      },
    ]);
  }

  return (
    <Container disableGutters className={classes.container}>
      <Grid container spacing={2} className={classes.grid}>
        {cart.map((item: CartItemData, key) => (
          <Grid item key={key} xs={12}>
            <ItemCard
              {...{ item }}
              onRemove={() => removeItemFromCart(item)}
              onChangeQuantity={(quantity) =>
                changeItemQuantity(item, quantity)
              }
            />
          </Grid>
        ))}
      </Grid>
      <Container>
        <Box className={classes.buttonContainer}>
          <UpdateCartButton cart={cart} /> {Subtotal}
        </Box>
        <CheckoutButton />
      </Container>
    </Container>
  );
}
