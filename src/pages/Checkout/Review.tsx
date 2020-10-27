import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useUserState } from 'user/UserContext';
import { getCartData } from 'utils/db.utils';
import { Cart } from 'pages/ShoppingCart/ShoppingCart.page';
import ShoppingCartItem from 'pages/ShoppingCart/ShoppingCartItem';
import { ShopItemData } from 'interfaces/shop-item.interface';

const addresses = [
  '1 Material-UI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA',
];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({
  shoppingCart,
}: {
  shoppingCart: { data: ShopItemData; quantity: number }[];
}) {
  const classes = useStyles();
  console.log('shoppingCart', shoppingCart);

  const Shipping = () => (
    <Grid item xs={12} sm={6}>
      <Typography variant='h6' gutterBottom className={classes.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>John Smith</Typography>
      <Typography gutterBottom>{addresses.join(', ')}</Typography>
    </Grid>
  );
  const PaymentDetails = () => (
    <Grid item container direction='column' xs={12} sm={6}>
      <Typography variant='h6' gutterBottom className={classes.title}>
        Payment details
      </Typography>
      <Grid container>
        {payments.map((payment) => (
          <React.Fragment key={payment.name}>
            <Grid item xs={6}>
              <Typography gutterBottom>{payment.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payment.detail}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );

  const OrderSummary = () => (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {shoppingCart.map((item, key) => {
          console.log('data', item);
          let { data } = item;
          return (
            <ListItem className={classes.listItem} key={key}>
              <ListItemText primary={data.name} secondary={data.name} />
              <Typography variant='body2'>{data.price}</Typography>
            </ListItem>
          );
        })}
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
  const ItemCards = () => (
    <Grid container spacing={2}>
      {shoppingCart.map((item, key) => {
        return (
          <Grid item key={key} xs={12}>
            <ShoppingCartItem
              itemData={item.data}
              quantity={item.quantity}
              onRemove={() => {}}
              onChangeQuantity={() => {}}
            />
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <React.Fragment>
     <OrderSummary />
      <Grid container spacing={2}>
        <Shipping />
        <PaymentDetails />
      </Grid>
    </React.Fragment>
  );
}
