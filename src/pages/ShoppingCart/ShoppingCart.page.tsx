import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserDispatch, useUserState } from 'UserContext';
import ShoppingCartItem from './ShoppingCartItem';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Routes } from 'Router';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
    table: {},
    container: {
      marginTop: theme.spacing(4),
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonContainer: {
      margin: theme.spacing(3, 0),
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    checkoutButton: {
      margin: theme.spacing(2, 0, 4),
    },
  })
);

export default function ShoppingCart() {
  const classes = useStyles();
  const user = useUserState();
  const userDispatch = useUserDispatch();
  const cartTotal = user.shoppingCart.reduce((total, x) => total + x.price, 0);
  const history = useHistory();

  function TableHeader() {
    return (
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell align='right'>Quantity</TableCell>
          <TableCell align='right'>Price</TableCell>
        </TableRow>
      </TableHead>
    );
  }
  function CheckoutButton() {
    return (
      <Button
        href={Routes.Checkout}
        className={classes.checkoutButton}
        variant='contained'
        color='primary'
      >
        {'Proceed to Checkout'}
      </Button>
    );
  }
  function UpdateCartButton() {
    return (
      <Button
        variant='outlined'
        onClick={() => {
          userDispatch({
            type: 'update_cart',
            payload: [],
          });
        }}
      >
        {'Update Cart'}
      </Button>
    );
  }
  function Subtotal() {
    return (
      <Typography variant='h6'>
        {`Subtotal: $${cartTotal.toFixed(2)}`}
      </Typography>
    );
  }

  return (
    <Container disableGutters className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHeader />
          <TableBody>
            {user.shoppingCart.map((item) => (
              <ShoppingCartItem {...item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.buttonContainer}>
        <UpdateCartButton />
        <Subtotal />
      </Box>
      <CheckoutButton />
    </Container>
  );
}
