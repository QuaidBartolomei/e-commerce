import Stack from '@mui/material/Stack';
import BannerImage from 'components/BannerImage';
import ShopItemCarousel from 'features/shop-item/ShopItemCarousel';
import {
  Categories,
  Product,
  ShopItemCategory,
} from 'features/shop-item/shopItem.interface';
import React from 'react';
import { getShopItems } from 'utils/shopItem.util';

type HomepageProps = {
  sortedItems: SortedItems[];
};

export default function Homepage({ sortedItems }: HomepageProps) {
  return (
    <>
      <BannerImage />
      <Stack
        direction='column'
        spacing={8}
        sx={{
          px: 2,
          mt: 4,
          mb: 8,
        }}
      >
        {sortedItems.map(({ category, items }) => (
          <ShopItemCarousel
            title={category}
            key={category}
            items={items}
            category={category}
          />
        ))}
      </Stack>
    </>
  );
}

export const getServerSideProps = async () => {
  const shopItems = await getShopItems();
  const sortedItems: SortedItems[] = Categories.map(category => ({
    category,
    items: shopItems.filter(x => x.category === category),
  }));
  const props: HomepageProps = { sortedItems };
  return { props };
};

type SortedItems = {
  category: ShopItemCategory;
  items: Product[];
};
