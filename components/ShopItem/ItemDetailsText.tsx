import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Form, Formik } from 'formik';
import { Product } from 'interfaces/shopItem.interface';
import { loremIpsum } from 'lorem-ipsum';
import React, { useMemo } from 'react';
import { getColors, getSizes } from 'utils/shopItems.utils';
import ItemAddedAlert from '../Alerts/ItemAddedAlert';
import { FormikSelectionInput } from '../Forms/Fields/FormikSelectionInput';
import { useUserDispatch } from '../User/user.context';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&>*': {
        margin: theme.spacing(2),
      },
    },
  })
);

const ItemDetailsText = ({ item }: { item: Product }) => {
  const classes = useStyles();

  const userDispatch = useUserDispatch();
  const [showAlert, setShowAlert] = React.useState(false);

  const sizes = useMemo(() => getSizes(item), [item.inventory]);
  const colors = useMemo(() => getColors(item), [item.inventory]);
  const description = loremIpsum({
    count: 3,
    units: 'sentence',
  });

  type ProductFormData = {
    size: string;
    color: string;
  };

  const AddToCartButton = () => {
    return (
      <Button
        variant='outlined'
        startIcon={<AddShoppingCartIcon />}
        type='submit'
      >
        Add To Cart
      </Button>
    );
  };

  const onSubmit = ({ size, color }: ProductFormData) => {
    userDispatch({
      type: 'add_item',
      payload: { id: item.id, color, size, quantity: 1 },
    });
    setShowAlert(true);
  };

  const initialValues = {
    size: sizes[0],
    color: colors[0],
  };

  return (
    <Container className={classes.container}>
      <Typography component='h1' variant='h3' style={{ margin: 0 }}>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={classes.form}>
          <FormikSelectionInput name='size' selectionValues={sizes} />
          <FormikSelectionInput name='color' selectionValues={colors} />
          <AddToCartButton />
        </Form>
      </Formik>
      <Typography>{description}</Typography>
      <ItemAddedAlert show={showAlert} />
    </Container>
  );
};

export default ItemDetailsText;
