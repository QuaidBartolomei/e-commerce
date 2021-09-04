import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { CartItemData, Product } from 'interfaces/shopItem.interface';
import React from 'react';
import { useQuery } from 'react-query';
import { DbCollections, getDataById } from 'utils/firebase.utils';

export type OrderReviewItemProps = { item: CartItemData };

export default function OrderReviewItem({ item }: OrderReviewItemProps) {
  const { id, quantity } = item;

  const { isLoading, isError, data } = useQuery(
    `cartIaatem_${id}`,
    async () => {
      const data = await getDataById(DbCollections.Items, id);
      return data as Product;
    }
  );

  console.log(data);
  if (isError) return <div>An error has occurred: </div>;
  if (isLoading || !data) return <div>Loading...</div>;
  const { name, price } = data;
  const fixedPrice = price.toFixed(2);

  return (
    <ListItem
      sx={{
        py: 1,
      }}
    >
      <ListItemText primary={name} secondary={name} />
      <Typography variant='body2'>{`${quantity} x ${fixedPrice}`}</Typography>
    </ListItem>
  );
}
