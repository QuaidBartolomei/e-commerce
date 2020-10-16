import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CartItemData, { ShopItemData } from 'interfaces/ShopItemData.interface';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useUserDispatch } from 'user/UserContext';
import { Routes } from 'Router';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const AddToCartButton = ({ item }: { item: CartItemData }) => {
  const classes = useStyles();
  const userDispatch = useUserDispatch();
  const history = useHistory();
  const [showAlert, setShowAlert] = React.useState(false);
  const addItemToCart = () => {
    console.log('adding item: ', item);
    userDispatch({
      type: 'add_item',
      payload: { ...item, quantity: 1 },
    });
    setShowAlert(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowAlert(false);
  };

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
          This is a success message!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default AddToCartButton;
