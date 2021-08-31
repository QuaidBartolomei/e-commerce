import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    addToCartButton: {
      maxWidth: 320,
    },
  })
);

export type AddToCartButtonProps = {
// props
}

export default function AddToCartButton({}:AddToCartButtonProps) {
  const classes = useStyles();
  return (
      <Button
        variant='outlined'
        startIcon={<AddShoppingCartIcon />}
        type='submit'
        className={classes.addToCartButton}
      >
        Add To Cart
      </Button>
)
};