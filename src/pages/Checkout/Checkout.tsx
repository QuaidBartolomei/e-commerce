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
    cartItemRow: {
      height: '120px',
      '&>*': {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    cartItemImage: { maxHeight: '100%', maxWidth: '100%' },
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

  const cartTotal = cartItems.reduce((total, x) => total + x.price, 0);

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
            <Grid item xs={3}>
              <img src={x.img} alt='img' className={classes.cartItemImage} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{x.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{x.quantity}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>${x.price}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button>
                <Typography>x</Typography>
              </Button>
            </Grid>
          </Grid>
        ))}

        <CheckoutDivider />

        <Grid item>
          <Typography align='right'>Total: ${cartTotal}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;

const headerData = [
  { name: 'Product', size: 3 },
  { name: 'Description', size: 3 },
  { name: 'Quantity', size: 2 },
  { name: 'Price', size: 2 },
  { name: 'Remove', size: 2 },
] as { name: string; size: 2 | 3 }[];

const CheckoutHeader = () => {
  return (
    <Grid item container spacing={1}>
      {headerData.map((x, i) => (
        <Grid key={i} item xs={x.size}>
          <Typography style={{ fontSize: '3vw' }}>{x.name}</Typography>
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
