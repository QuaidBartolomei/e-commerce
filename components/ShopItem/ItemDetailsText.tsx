import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Product } from 'interfaces/shopItem.interface';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';
import AddToCartForm from '../Forms/AddItemForm/AddToCartForm';

const ItemDetailsText = ({ item }: { item: Product }) => {
  const [showAlert, setShowAlert] = React.useState(false);

  const description = loremIpsum({
    count: 3,
    units: 'sentence',
  });

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '>*': {
          mt: 3,
        },
      }}
    >
      <Typography component='h1' variant='h3' >
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <AddToCartForm item={item} onAddItem={() => setShowAlert(true)} />
      <Typography>{description}</Typography>
    </Container>
  );
};

export default ItemDetailsText;
