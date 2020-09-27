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

const useStyles = makeStyles((theme) =>
  createStyles({
    table: {
    },
    container: {
      marginTop: theme.spacing(4),
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    buttonContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      '&>*': {
        margin: theme.spacing(4, 2),
      },
    },
    subtotal: {
      marginTop: theme.spacing(4),
    },
  })
);

export default function ShoppingCart() {
  const classes = useStyles();
  const user = useUserState();
  const userDispatch = useUserDispatch();
  const cartTotal = user.shoppingCart.reduce((total, x) => total + x.price, 0);
  const history = useHistory();

  return (
    <Container disableGutters className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align='right'>Quantity</TableCell>
              <TableCell align='right'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.shoppingCart.map((item) => (
              <ShoppingCartItem {...item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant='h5'
        className={classes.subtotal}
      >{`Subtotal: $${cartTotal.toFixed(2)}`}</Typography>
      <Container className={classes.buttonContainer}>
        <Button
          variant='outlined'
          onClick={() => {
            userDispatch({
              type: 'update_cart',
              payload: [],
            });
          }}
        >
          Update Cart
        </Button>
        <Button variant='outlined'>Checkout</Button>
      </Container>
    </Container>
  );
}
