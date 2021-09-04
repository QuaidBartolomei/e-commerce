import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useUserState } from 'components/User/user.context';
import React from 'react';
import { getCartTotal } from 'utils/shopItem.util';
import OrderReviewItem from './OrderReviewItem';

export type OrderSummaryProps = {
  // props
};

export default function OrderSummary({}: OrderSummaryProps) {
  const { cart } = useUserState();

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
