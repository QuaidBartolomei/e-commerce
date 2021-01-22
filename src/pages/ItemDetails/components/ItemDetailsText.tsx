import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useSelectInput from 'components/form-inputs/useSelectInput';
import { Product } from 'interfaces/shopItem.interface';
import { loremIpsum } from 'lorem-ipsum';
import AddToCartButton from 'pages/ItemDetails/components/AddToCartButton';
import React from 'react';
import { getColors, getSizes } from 'utils/shopItems.utils';

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

const ItemDetailsText = ({ item }: { item: Product }) => {
  const classes = useStyles();

  const { SelectInput: ColorSelect, value: color } = useSelectInput(
    'Color',
    getColors(item)
  );
  const { SelectInput: SizeSelect, value: size } = useSelectInput(
    'Size',
    getSizes(item)
  );

  return (
    <Container className={classes.container}>
      <Typography component='h1' variant='h3' style={{ margin: 0 }}>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <SizeSelect />
      <ColorSelect />
      <AddToCartButton item={{ id: item.id, size, color, quantity: 1 }} />
      <Typography>{loremIpsum({ count: 3, units: 'sentence' })}</Typography>
    </Container>
  );
};

export default ItemDetailsText;
