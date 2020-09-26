import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ItemThumbnail from 'components/ItemThumbnail';
import CartItemData from 'interfaces/ShopItemData.interface';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserDispatch } from 'UserContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
    productCell: {
      display: 'flex',
      flexDirection: 'row',
    },
  })
);

const ShoppingCartItem = (item: CartItemData) => {
  const classes = useStyles();
  const history = useHistory();
  const userDispatch = useUserDispatch();
  
  return (
    <TableRow key={item.name}>
      <TableCell component='th' scope='row' className={classes.productCell}>
        <ItemThumbnail
          image={item.imageUrl}
          onClick={() => history.push(`${Routes.Product}/${item.id}`)}
          size={96}
        />
        <Container>
          <Typography component='h5' variant='h5'>
            {item.name}
          </Typography>
          <Button
            onClick={() =>
              userDispatch({
                type: 'remove_item',
                payload: item.id,
              })
            }
          >
            {'Delete'}
          </Button>
        </Container>
      </TableCell>
      <TableCell align='right'>{item.quantity}</TableCell>
      <TableCell align='right'>{item.price}</TableCell>
    </TableRow>
  );
};

export default ShoppingCartItem;
