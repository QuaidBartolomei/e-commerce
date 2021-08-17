import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShopItemCard from 'components/ShopItem/ShopItemCard';
import {
  Product,
  ShopItemCategory
} from 'interfaces/shopItem.interface';
import React from 'react';
import { getShopItemsByCategory } from 'utils/shopItem.util';

const gridSpacing = 2;

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      padding: theme.spacing(gridSpacing),
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

interface CategoryPageProps {
  items: Product[];
}

export default function CategoryPage({ items }: CategoryPageProps) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container direction='row' spacing={gridSpacing} justify='center'>
        {items.map(item => (
          <Grid item key={item.id} className={classes.gridItem}>
            <ShopItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

interface Context {
  params: { category: string };
}
export const getServerSideProps = async ({ params }: Context) => {
  const { category } = params;
  const items = await getShopItemsByCategory(category as ShopItemCategory);
  const props = { items };
  return { props };
};
