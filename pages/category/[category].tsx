import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShopItemCard from 'components/ShopItemCard';
import {
  Categories,
  Product,
  ShopItemCategory,
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
    grid: {},
  })
);

interface Params {
  params: { category: string };
}

interface Props {
  items: Product[];
}

export default function CategoryPage({ items }: Props) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid
        container
        direction='row'
        spacing={gridSpacing}
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
}

export const getStaticProps = async ({ params }: Params) => {
  const { category } = params;
  const items = await getShopItemsByCategory(category as ShopItemCategory);
  return {
    props: {
      items,
    },
  };
};

export async function getStaticPaths() {
  const paths = Categories.map(category => ({
    params: { category },
  }));

  return { paths, fallback: false };
}
