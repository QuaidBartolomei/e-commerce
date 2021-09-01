import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { CartItemData, Product } from 'interfaces/shopItem.interface';
import React from 'react';
import { useQuery } from 'react-query';
import { DbCollections, getDataById } from 'utils/firebase.utils';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      padding: theme.spacing(1, 0),
    },
  })
);

export type OrderReviewItemProps = { item: CartItemData };

export default function OrderReviewItem({ item }: OrderReviewItemProps) {
  const classes = useStyles();
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
    <ListItem className={classes.listItem}>
      <ListItemText primary={name} secondary={name} />
      <Typography variant='body2'>{`${quantity} x ${fixedPrice}`}</Typography>
    </ListItem>
  );
}
