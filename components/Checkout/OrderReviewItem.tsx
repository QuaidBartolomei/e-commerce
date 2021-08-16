import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CartItemData } from 'interfaces/shopItem.interface';
import React from 'react';
import { useQuery } from 'react-query';
import { getShopItemById } from 'utils/shopItem.util';

const useStyles = makeStyles(theme =>
  createStyles({
    listItem: {
      padding: theme.spacing(1, 0),
    },
  })
);

export type OrderReviewItemProps = {
  // props
};

export default function OrderReviewItem({ item }: { item: CartItemData }) {
  const classes = useStyles();
  const { id } = item;
  const { isLoading, isError, data } = useQuery('cartItemData', () =>
    getShopItemById(id)
  );
  if (isLoading || !data) return <div>Loading...</div>;
  if (isError) return <div>An error has occurred: </div>;
  const { name, price } = data;
  return (
    <ListItem className={classes.listItem}>
      <ListItemText primary={name} secondary={name} />
      <Typography variant='body2'>{price}</Typography>
    </ListItem>
  );
}
