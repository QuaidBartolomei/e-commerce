import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddToCartForm from 'features/add-to-cart/AddToCartForm';
import { Product } from 'interfaces/shopItem.interface';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

const ItemDetailsText = ({ item }: { item: Product }) => {
  const description = loremIpsum({
    count: 3,
    units: 'sentence',
  });

  return (
    <Stack
      direction='column'
      spacing={3}
      sx={{
        mt: { xs: 3, md: 0 },
      }}
    >
      <Typography component='h1' variant='h3'>
        {item.name}
      </Typography>
      <Typography>${item.price}</Typography>
      <Divider />
      <AddToCartForm item={item} onAddItem={() => {}} />
      <Typography>{description}</Typography>
    </Stack>
  );
};

export default ItemDetailsText;
