import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { useUserDispatch } from 'components/User/user.context';
import { Form, Formik } from 'formik';
import { Product } from 'interfaces/shopItem.interface';
import React from 'react';
import { getColors, getSizes } from 'utils/shopItems.utils';
import AddToCartButton from '../Buttons/AddToCartButton';
import { FormikSelectionInput } from '../Fields/FormikSelectionInput';

import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&>*': {
        margin: theme.spacing(2),
      },
    },
    addToCartButton: {
      maxWidth: 320,
    },
  })
);

export type AddItemFormProps = {
  item: Product;
  onAddItem: () => void;
};

type ProductFormData = {
  size: string;
  color: string;
};

export default function AddItemForm({ item, onAddItem }: AddItemFormProps) {
  const classes = useStyles();
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
      <Form className={classes.form}>
        <FormikSelectionInput name='size' selectionValues={sizes} />
        <FormikSelectionInput name='color' selectionValues={colors} />
        <AddToCartButton />
      </Form>
    </Formik>
  );
}
