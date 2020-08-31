import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge/Badge';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      paddingRight: '8px'
    },
    countText: {
      color: 'red',
    },
  })
);

const ShoppingCartIcon = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Badge badgeContent={4} color='secondary'>
        <ShoppingCart />
      </Badge>
    </div>
  );
};

export default ShoppingCartIcon;
