import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ClothingSize, ShopItemData } from 'interfaces/ShopItemData.interface';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';
import { useUserDispatch } from 'UserContext';
import { Routes } from 'Router';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1)
      },
    },
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

const ItemDetailsText = ({ item }: { item: ShopItemData }) => {
  const [size, setSize] = React.useState<ClothingSize>('S');
  const classes = useStyles();
  const userDispatch = useUserDispatch();
  const addItemToCart = () =>
    userDispatch({
      type: 'add_item',
      payload: { ...item, quantity: 1 },
    });
  return (
    <Container className={classes.container}>
      <Typography component='h1' variant='h3' style={{ margin: 0 }}>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <FormControl className={classes.formControl}>
        <InputLabel id='size_label'>Size</InputLabel>
        <Select
          labelId='size_label'
          id='size'
          value={size}
          onChange={(e) => setSize(e.target.value as ClothingSize)}
        >
          <MenuItem value={'S'}>S</MenuItem>
          <MenuItem value={'M'}>M</MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant='outlined'
        className={classes.formControl}
        onClick={addItemToCart}
        startIcon={<AddShoppingCartIcon />}
      >
        Add To Cart
      </Button>
      <Typography>{loremIpsum({ count: 3, units: 'sentence' })}</Typography>
    </Container>
  );
};

export default ItemDetailsText;
