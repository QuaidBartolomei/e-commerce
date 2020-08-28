import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import fedora from 'assets/hats/fedora.jpg';
import Button from '@material-ui/core/Button/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    checkoutMenu: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'fit-content',
    },
    checkoutItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      textAlign: 'center',
      '&>*': {
        width: '120px',
      },
    },
    cartItemRow: {
      height: '120px',
      '&>*': {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  })
);

interface ShopItemData {
  img: string;
  name: string;
  quantity: number;
  price: number;
}

const cartItems: ShopItemData[] = [
  {
    img: fedora,
    name: 'Fedora',
    quantity: 1,
    price: 12,
  },
];

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={1} direction='column'>
        <CheckoutHeader />
        <CheckoutDivider />

        {cartItems.map((x, i) => (
          <Grid
            key={i}
            item
            container
            spacing={1}
            className={classes.cartItemRow}
          >
            <Grid item xs>
                <img src={x.img} alt='img' style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </Grid>
            <Grid item xs>
              <Typography>{x.name}</Typography>
            </Grid>
            <Grid item xs>
              <Typography>{x.quantity}</Typography>
            </Grid>
            <Grid item xs>
              <Typography>${x.price}</Typography>
            </Grid>
            <Grid item xs>
              <Button
                style={{
                  width: '100%',
                }}
              >
                <Typography variant='h5'>x</Typography>
              </Button>
            </Grid>
          </Grid>
        ))}

        <CheckoutDivider />
        <Grid item>
          <Typography
            style={{
              width: '100%',
              textAlign: 'right',
            }}
            variant='h4'
          >
            Total: ${cartItems.reduce((total, x) => total + x.price, 0)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;

const CheckoutHeader = () => {
  return (
    <Grid item container spacing={1}>
      {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map((x, i) => (
        <Grid key={i} item xs>
          <Typography style={{ fontSize: '3vw' }}>{x}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const CheckoutDivider = () => (
  <Grid item>
    <hr style={{ width: '100%' }} />
  </Grid>
);
