import Badge from '@material-ui/core/Badge/Badge';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import React, { useMemo } from 'react';
import { Routes } from 'Router';
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

const ShoppingCartIconButton = () => {
  const classes = useStyles();
  const user = useUserState();
  const cartSize = useMemo(
    () => user.cart.reduce((total, x) => total + x.quantity, 0),
    [user.cart]
  );

  return (
    <Link href={Routes.ShoppingCart} className={classes.container} color='inherit'>
      <Badge badgeContent={cartSize} color='error'>
        <ShoppingCart />
      </Badge>
    </Link>
  );
};

export default ShoppingCartIconButton;
