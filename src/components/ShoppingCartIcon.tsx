import React, { useContext, useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge/Badge';
import { useUserState } from 'UserContext';

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
  const getCartSize = () =>
    user.shoppingCart.reduce((total, x) => total + x.quantity, 0);
  const [cartSize, setCartSize] = useState(getCartSize());
  console.log(user.shoppingCart);
  useEffect(() => {
    setCartSize(getCartSize());
  }, [user]);
  return (
    <div className={classes.container}>
      <Badge badgeContent={cartSize} color='secondary'>
        <ShoppingCart />
      </Badge>
    </div>
  );
};

export default ShoppingCartIcon;
