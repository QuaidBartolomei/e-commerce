import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import BannerImage from 'components/BannerImage';
import ShopItemCarousel from 'components/ShopItem/ShopItemCarousel';
import {
  Categories,
  Product,
  ShopItemCategory,
} from 'interfaces/shopItem.interface';
import React from 'react';
import { getShopItems } from 'utils/shopItem.util';

const useStyles = makeStyles(theme =>
  createStyles({
    content: {
      padding: theme.spacing(0, 2),
      '&>*': {
        margin: theme.spacing(6, 0),
      },
    },
  })
);

type SortedItems = {
  category: ShopItemCategory;
  items: Product[];
};

type HomepageProps = {
  sortedItems: SortedItems[];
};

export default function Homepage({ sortedItems }: HomepageProps) {
  const classes = useStyles();

  return (
    <>
      <BannerImage />
      <Container className={classes.content}>
        {sortedItems.map(({ category, items }) => (
          <ShopItemCarousel
            title={category}
            key={category}
            items={items}
            category={category}
          />
        ))}
      </Container>
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
