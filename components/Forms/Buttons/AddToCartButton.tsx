import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from 'components/Alerts/Alert';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartItemData } from 'interfaces/shopItem.interface';
import React from 'react';
import { useUserDispatch } from 'components/User/user.context';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

interface Props {
  item: CartItemData;
}

const AddToCartButton = ({ item }: Props) => {
  const { id, color, size, quantity } = item;
  const classes = useStyles();
  const userDispatch = useUserDispatch();
  const [showAlert, setShowAlert] = React.useState(false);

  function handleClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') return;
    setShowAlert(false);
  }

  function addItemToCart() {
    userDispatch({
      type: 'add_item',
      payload: { id, color, size, quantity },
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
