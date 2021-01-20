import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getItemData } from 'apis/shopItem.api';
import React, { useEffect, useState } from 'react';
import { useUserState } from 'UserContext';

const addresses = [
  '1 Material-UI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA',
];

type PaymentInfo = {
  type: string;
  holder: string;
  number: string;
  expiration: string;
};

const example_paymentInfo: PaymentInfo = {
  type: 'Visa',
  holder: 'Mr John Smith',
  number: 'xxxx-xxxx-xxxx-1234',
  expiration: '04/2024',
};
const { type, holder, number, expiration } = example_paymentInfo;
const payments = [
  { name: 'Card type', detail: type },
  { name: 'Card holder', detail: holder },
  { name: 'Card number', detail: number },
  { name: 'Expiry date', detail: expiration },
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

export default function Review() {
  const classes = useStyles();
  const { cart } = useUserState();

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

  const CartItems = () => (
    <React.Fragment>
      {cart.map((item, key) => {
        let { id } = item;
        return <CartItem itemId={id} key={key} />;
      })}
    </React.Fragment>
  );
  const CartItem = ({ itemId }: { itemId: string }) => {
    const [itemDetails, setItemDetails] = useState<{
      name: string;
      price: number;
    }>();

    useEffect(() => {
      getItemData(itemId).then((data) => {
        if (!data) return;
        const { name, price } = data;
        setItemDetails({
          name,
          price,
        });
      });
    }, [itemId]);

    if (!itemDetails) return null;
    const { name, price } = itemDetails;
    return (
      <ListItem className={classes.listItem}>
        <ListItemText primary={name} secondary={name} />
        <Typography variant='body2'>{price}</Typography>
      </ListItem>
    );
  };

  const OrderSummary = () => (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <CartItems />
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
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
