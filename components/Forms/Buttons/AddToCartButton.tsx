import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useFormikContext } from 'formik';
import React from 'react';

export type AddToCartButtonProps = {
  // props
};

export default function AddToCartButton({}: AddToCartButtonProps) {
  const { submitCount } = useFormikContext();
  return (
    <Button
      variant='outlined'
      sx={{
        maxWidth: 320,
        mt: 2,
      }}
      startIcon={<AddShoppingCartIcon />}
      type='submit'
    >
      Add To Cart
    </Button>
  );
}
