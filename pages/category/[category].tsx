import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ShopItemCard from 'components/ShopItem/ShopItemCard';
import { Product, ShopItemCategory } from 'interfaces/shopItem.interface';
import React from 'react';
import { getShopItemsByCategory } from 'utils/shopItem.util';

const gridSpacing = 2;

interface CategoryPageProps {
  items: Product[];
}

export default function CategoryPage({ items }: CategoryPageProps) {
  return (
    <Container
      sx={{
        p: gridSpacing,
      }}
    >
      <Grid
        container
        direction='row'
        spacing={gridSpacing}
        justifyContent='center'
      >
        {items.map(item => (
          <Grid
            item
            key={item.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
