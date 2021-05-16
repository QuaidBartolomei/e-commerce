import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getShopItemsByCategory } from 'apis/shopItem.api';
import { Product, ShopItemCategory } from 'interfaces/shopItem.interface';
import React from 'react';
import { useParams } from 'react-router-dom';
import ShopItemCard from './ShopItemCard';

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
  const [items, setItems] = React.useState<Product[]>([]);

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
        direction='row'
        spacing={GRID_SPACING}
        className={classes.grid}
        justify='center'
      >
        {items.map(item => (
          <Grid
            item
            key={item.id}
            className={classes.gridItem}
            justify='flex-start'
          >
            <ShopItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ItemListPage;
