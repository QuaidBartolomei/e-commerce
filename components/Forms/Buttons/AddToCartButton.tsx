import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { useFormikContext } from 'formik';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    addToCartButton: {
      maxWidth: 320,
    },
  })
);

export type AddToCartButtonProps = {
  // props
};

export default function AddToCartButton({}: AddToCartButtonProps) {
  const classes = useStyles();
  const { submitCount } = useFormikContext();
  return (
    <Button
      variant='outlined'
      startIcon={<AddShoppingCartIcon />}
      type='submit'
      className={classes.addToCartButton}
      disabled={submitCount !== 0}
    >
      Add To Cart
    </Button>
  );
}
