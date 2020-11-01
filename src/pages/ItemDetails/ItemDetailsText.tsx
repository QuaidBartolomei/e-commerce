import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddToCartButton from 'components/AddToCartButton';
import { loremIpsum } from 'lorem-ipsum';
import { ShopItemModel, ClothingSize } from 'models/shop-item/shop-item.db';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

const ItemDetailsText = ({ item }: { item: ShopItemModel }) => {
  const [size, setSize] = React.useState<ClothingSize>('S');
  const classes = useStyles();

  const SizeSelect = () => (
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
  );

  return (
    <Container className={classes.container}>
      <Typography component='h1' variant='h3' style={{ margin: 0 }}>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <SizeSelect />
      <AddToCartButton item={{ ...item, quantity: 1 }} />
      <Typography>{loremIpsum({ count: 3, units: 'sentence' })}</Typography>
    </Container>
  );
};

export default ItemDetailsText;
