import Badge from '@material-ui/core/Badge/Badge';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import React, { useMemo } from 'react';
import { Routes } from 'Router';
import { useUserState } from 'UserContext';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
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
    <Link
      href={Routes.ShoppingCart}
      className={classes.container}
      color='inherit'
    >
      <Badge badgeContent={cartSize} color='error'>
        <ShoppingCart fontSize='large' />
      </Badge>
    </Link>
  );
};

export default ShoppingCartIconButton;
