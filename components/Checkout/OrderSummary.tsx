import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useUserState } from 'components/User/user.context';
import React from 'react';
import { getCartTotal } from 'utils/shopItem.util';
import OrderReviewItem from './OrderReviewItem';

const useStyles = makeStyles(theme =>
  createStyles({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
  })
);

export type OrderSummaryProps = {
  // props
};

export default function OrderSummary({}: OrderSummaryProps) {
  const classes = useStyles();
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
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            {getCartTotal(cart)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
