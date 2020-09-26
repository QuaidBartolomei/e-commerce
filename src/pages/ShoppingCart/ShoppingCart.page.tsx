import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function ShoppingCart() {
  const classes = useStyles();
  const user = useUserState();
  const userDispatch = useUserDispatch();
  const cartTotal = user.shoppingCart.reduce((total, x) => total + x.price, 0);
  const history = useHistory();

  return (
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
  );
}
