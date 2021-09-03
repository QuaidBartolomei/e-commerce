import Box from '@material-ui/core/Box';
import ItemAddedAlert from 'components/Alerts/ItemAddedAlert';
import { useUserDispatch } from 'components/User/user.context';
import { Form, Formik, FormikHelpers } from 'formik';
import { Product } from 'interfaces/shopItem.interface';
import React, { useState } from 'react';
import { getColors, getSizes } from 'utils/shopItems.utils';
import AddToCartButton from '../Buttons/AddToCartButton';
import { FormikSelectionInput } from '../Fields/FormikSelectionInput';

export type AddItemFormProps = {
  item: Product;
  onAddItem: () => void;
};

type AddToCartFormData = {
  size: string;
  color: string;
};

export default function AddToCartForm({ item, onAddItem }: AddItemFormProps) {
  const userDispatch = useUserDispatch();
  const sizes = getSizes(item);
  const colors = getColors(item);
  const [showAlert, setShowAlert] = useState(false);

  const initialValues = {
    size: sizes[0],
    color: colors[0],
  };

  const onSubmit = (
    { size, color }: AddToCartFormData,
    helpers: FormikHelpers<AddToCartFormData>
  ) => {
    userDispatch({
      type: 'add_item',
      payload: { ...item, color, size, quantity: 1 },
    });
    onAddItem();
    setShowAlert(true);
    helpers.setSubmitting(false);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Box
          component={Form}
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

      <ItemAddedAlert show={showAlert} />
    </>
  );
}