import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { CartItem, useUserDispatch } from 'UserContext';
import Alert from 'components/Alert';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

interface Props {
  item: CartItem;
}

const AddToCartButton = ({ item }: Props) => {
  const classes = useStyles();
  const userDispatch = useUserDispatch();
  const [showAlert, setShowAlert] = React.useState(false);

  function handleClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') return;
    setShowAlert(false);
  }

  function addItemToCart() {
    console.log('adding item: ', item);
    userDispatch({
      type: 'add_item',
      payload: { ...item, quantity: 1 },
    });
    setShowAlert(true);
  }

  return (
    <React.Fragment>
      <Button
        variant='outlined'
        className={classes.formControl}
        onClick={addItemToCart}
        startIcon={<AddShoppingCartIcon />}
      >
        Add To Cart
      </Button>
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          Item added to cart!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default AddToCartButton;