import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import OrderSummary from './OrderSummary';

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

export default function Review() {
  const Shipping = () => (
    <Grid item xs={12} sm={6}>
      <Typography
        variant='h6'
        sx={{
          mt: 2,
        }}
        gutterBottom
      >
        Shipping
      </Typography>
      <Typography gutterBottom>John Smith</Typography>
      <Typography gutterBottom>{addresses.join(', ')}</Typography>
    </Grid>
  );

  const PaymentDetails = () => (
    <Grid item container direction='column' xs={12} sm={6}>
      <Typography
        variant='h6'
        gutterBottom
        sx={{
          mt: 2,
        }}
      >
        Payment details
      </Typography>
      <Grid container>
        {payments.map(payment => (
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
