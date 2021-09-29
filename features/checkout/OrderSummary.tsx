import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { selectCart } from 'features/user/userSlice';
import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { getCartTotal } from 'utils/shopItem.util';
import OrderReviewItem from '../../features/checkout/OrderReviewItem';

export type OrderSummaryProps = {
  // props
};

export default function OrderSummary({}: OrderSummaryProps) {
  const cart = useAppSelector(selectCart);

  const CartItems = () => (
    <React.Fragment>
      {cart.map((item, key) => {
        return <OrderReviewItem item={item} key={key} />;
      })}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <CartItems />
        <ListItem
          sx={{
            py: 1,
          }}
        >
          <ListItemText primary='Total' />
          <Typography
            sx={{
              fontWeight: 700,
            }}
            variant='subtitle1'
          >
            {getCartTotal(cart)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
