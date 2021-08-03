import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Alert from 'components/Alert';
import { Form, Formik, useFormikContext } from 'formik';
import { Product } from 'interfaces/shopItem.interface';
import { loremIpsum } from 'lorem-ipsum';
import React, { useMemo } from 'react';
import { getColors, getSizes } from 'utils/shopItems.utils';
import { useUserDispatch } from './User/user.context';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

const ItemDetailsText = ({ item }: { item: Product }) => {
  const classes = useStyles();

  const userDispatch = useUserDispatch();
  const [showAlert, setShowAlert] = React.useState(false);

  const sizes = useMemo(() => getSizes(item), [item.inventory]);
  const colors = useMemo(() => getColors(item), [item.inventory]);
  console.log(sizes, '- sizes');
  console.log(colors, '- colors');

  type FormData = {
    size: string;
    color: string;
  };

  type SelectionInputProps = {
    name: string;
    selectionValues: string[];
  };

  const SelectionInput = (props: SelectionInputProps) => {
    const { name, selectionValues } = props;
    const { values, handleChange } = useFormikContext<FormData>();
    return (
      <FormControl>
        <InputLabel id={`${name}_label`}>{name}</InputLabel>
        <Select
          required
          labelId={`${name}_label`}
          id={name}
          value={values.size}
          onChange={handleChange}
        >
          {selectionValues.map(value => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const SizeSelect = () => (
    <SelectionInput name='size' selectionValues={sizes} />
  );

  const ColorSelect = () => (
    <SelectionInput name='color' selectionValues={colors} />
  );

  const AddToCartButton = () => {
    return (
      <Button
        variant='outlined'
        className={classes.formControl}
        startIcon={<AddShoppingCartIcon />}
        type='submit'
      >
        Add To Cart
      </Button>
    );
  };

  const ItemAddedAlert = () => {
    function handleClose(event?: React.SyntheticEvent, reason?: string) {
      if (reason === 'clickaway') return;
      setShowAlert(false);
    }

    return (
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          Item added to cart!
        </Alert>
      </Snackbar>
    );
  };

  const onSubmit = ({ size, color }: FormData) => {
    userDispatch({
      type: 'add_item',
      payload: { id: item.id, color, size, quantity: 1 },
    });
    setShowAlert(true);
  };

  return (
    <Container className={classes.container}>
      <Typography component='h1' variant='h3' style={{ margin: 0 }}>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <Formik
        initialValues={{
          size: sizes[0],
          color: colors[0],
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <SizeSelect />
          <ColorSelect />
          <AddToCartButton />
        </Form>
      </Formik>
      <Typography>{loremIpsum({ count: 3, units: 'sentence' })}</Typography>
      <ItemAddedAlert />
    </Container>
  );
};

export default ItemDetailsText;
