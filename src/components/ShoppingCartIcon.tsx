import Badge from '@material-ui/core/Badge/Badge';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import React, { useMemo } from 'react';
import { useUserState } from 'user/UserContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      paddingRight: '4px',
    },
    countText: {
      color: 'red',
    },
  })
);

const ShoppingCartIcon = () => {
  const classes = useStyles();
  const user = useUserState();
  const cartSize = useMemo(
    () => user.cart.reduce((total, x) => total + x.quantity, 0),
    [user.cart]
  );
  return (
    <div className={classes.container}>
      <Badge badgeContent={cartSize} color='error'>
        <ShoppingCart />
      </Badge>
    </div>
  );
};

export default ShoppingCartIcon;
