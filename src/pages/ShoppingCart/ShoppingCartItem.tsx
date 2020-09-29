import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ItemThumbnail from 'components/ItemThumbnail';
import CartItemData from 'interfaces/ShopItemData.interface';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserDispatch } from 'UserContext';
import TextField from '@material-ui/core/TextField';
import { maxMin } from 'utils/number.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
    productCell: {
      display: 'flex',
      flexDirection: 'row',
    },
    quantityTextField: {
      textAlign: 'right',
      maxWidth: 64,
    },
  })
);

const ShoppingCartItem = ({
  item,
  onRemoveItem,
  onChangeQuantity,
}: {
  item: CartItemData;
  onRemoveItem: () => void;
  onChangeQuantity: (quantity: number) => void;
}) => {
  const classes = useStyles();
  const history = useHistory();

  const DeleteItemButton = () => (
    <Link
      variant='body2'
      component='button'
      color='error'
      onClick={onRemoveItem}
    >
      {'Remove from cart'}
    </Link>
  );

  const QuantityField = () => (
    <TextField
      className={classes.quantityTextField}
      value={item.quantity}
      onChange={(e) => changeItemQuantity(Number(e.target.value))}
      variant='outlined'
      type='number'
      size='small'
    />
  );

  function changeItemQuantity(quantity: number) {
    quantity = maxMin(Number(quantity), 99, 0);
    onChangeQuantity(quantity);
  }

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
            {item.name} - ({item.size})
          </Typography>
          <DeleteItemButton />
        </Container>
      </TableCell>
      <TableCell align='right'>
        <QuantityField />
      </TableCell>
      <TableCell align='right'>
        {'$'}
        {item.price.toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

export default ShoppingCartItem;
