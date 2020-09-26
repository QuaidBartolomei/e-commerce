import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { useUserState, useUserDispatch } from 'UserContext';
import ItemThumbnail from 'components/ItemThumbnail';
import { Routes } from 'Router';
import { useHistory, useParams } from 'react-router-dom';

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
  productCell: {
    display: 'flex',
    flexDirection: 'row',
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

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ShoppingCartPage() {
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
            <TableRow key={item.name}>
              <TableCell
                component='th'
                scope='row'
                className={classes.productCell}
              >
                <ItemThumbnail
                  image={item.imageUrl}
                  onClick={() => history.push(`${Routes.Product}/${item.id}`)}
                />
                {item.name}
              </TableCell>
              <TableCell align='right'>{item.quantity}</TableCell>
              <TableCell align='right'>{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
