import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  ShopItemCategory,
  ShopItemData
} from 'interfaces/shop-item.interface';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getShopItemsByCategory } from 'utils/db.utils';
import ShopItem from './ShopItem';

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
