import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {
  ShopItemCategory,
  ShopItemData,
} from 'interfaces/shop-item.interface';
import Container from '@material-ui/core/Container';
import ShopItem from './ShopItem';
import { getShopItemsByCategory } from 'utils/db.utils';

const GRID_SPACING = 2;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(GRID_SPACING),
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    grid: {
    },
  })
);

const ItemListPage = () => {
  const classes = useStyles();
  let { category } = useParams<{ category: string }>();
  const [items, setItems] = React.useState<ShopItemData[]>([]);

  React.useEffect(() => {
    getShopItemsByCategory(category as ShopItemCategory).then((items) => {
      console.log('received items: ', items);
      setItems(items);
    });
  }, [category]);

  return (
    <Container className={classes.container}>
      <Grid
        container
        spacing={GRID_SPACING}
        className={classes.grid}
        justify='center'
      >
        {items.map((item) => (
          <Grid item key={item.id} className={classes.gridItem}>
            <ShopItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ItemListPage;
