import Box from '@material-ui/core/Box';
import { useUserDispatch } from 'components/User/user.context';
import { Formik } from 'formik';
import { Product } from 'interfaces/shopItem.interface';
import React from 'react';
import { getColors, getSizes } from 'utils/shopItems.utils';
import AddToCartButton from '../Buttons/AddToCartButton';
import { FormikSelectionInput } from '../Fields/FormikSelectionInput';


export type AddItemFormProps = {
  item: Product;
  onAddItem: () => void;
};

type ProductFormData = {
  size: string;
  color: string;
};

export default function AddToCartForm({ item, onAddItem }: AddItemFormProps) {
  const userDispatch = useUserDispatch();
  const sizes = getSizes(item);
  const colors = getColors(item);

  const initialValues = {
    size: sizes[0],
    color: colors[0],
  };

  const onSubmit = ({ size, color }: ProductFormData) => {
    userDispatch({
      type: 'add_item',
      payload: { ...item, color, size, quantity: 1 },
    });
    onAddItem();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Box
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <FormikSelectionInput name='size' selectionValues={sizes} />
        <FormikSelectionInput name='color' selectionValues={colors} />
        <AddToCartButton />
      </Box>
    </Formik>
  );
}
