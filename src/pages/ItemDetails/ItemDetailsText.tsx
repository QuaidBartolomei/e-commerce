import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { loremIpsum } from 'lorem-ipsum';
import AddToCartButton from 'pages/ItemDetails/AddToCartButton';
import React from 'react';
import SizeSelect from './SizeSelect';
import { useItemDetailsState } from './useItemDetails';

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

const ItemDetailsText = () => {
  const classes = useStyles();
  const {
    item,
    selectedSize: size,
    selectedColor: color,
  } = useItemDetailsState();

  return (
    <Container className={classes.container}>
      <Typography component='h1' variant='h3' style={{ margin: 0 }}>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <SizeSelect />
      <AddToCartButton item={{ id: item.id, size, color, quantity: 1 }} />
      <Typography>{loremIpsum({ count: 3, units: 'sentence' })}</Typography>
    </Container>
  );
};

export default ItemDetailsText;
