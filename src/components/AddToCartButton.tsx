import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CartItemData from 'interfaces/ShopItemData.interface';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useUserDispatch } from 'UserContext';
import { Routes } from 'Router';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

const AddToCartButton = (item: CartItemData) => {
  const classes = useStyles();
  const userDispatch = useUserDispatch();
  const history = useHistory();
  const addItemToCart = () => {
    userDispatch({
      type: 'add_item',
      payload: { ...item, quantity: 1 },
    });
    history.push(Routes.ShoppingCart);
  };
  return (
    <Button
      variant='outlined'
      className={classes.formControl}
      onClick={addItemToCart}
      startIcon={<AddShoppingCartIcon />}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;