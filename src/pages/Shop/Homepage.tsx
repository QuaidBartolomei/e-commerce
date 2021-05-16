import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getShopItems } from 'apis/shopItem.api';
import BannerImage from 'components/BannerImage/BannerImage';
import {
  Categories, Product,
  ShopItemCategory
} from 'interfaces/shopItem.interface';
import React, { useEffect, useState } from 'react';
import ShopItemCarousel from './ShopItemCarousel';

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      padding: theme.spacing(0, 2),
      '&>*': {
        margin: theme.spacing(6, 0),
      },
    },
  })
);

export default function Homepage() {
  const classes = useStyles();
  const [shopItems, setShopItems] = useState<Product[]>([]);

  useEffect(() => {
    getShopItems().then(setShopItems);
  }, []);
  const shopItemsSorted: {
    category: ShopItemCategory;
    items: Product[];
  }[] = Categories.map(category => ({
    category,
    items: shopItems.filter(x => x.category === category),
  }));

  return (
    <>
      <BannerImage />
      <Container className={classes.image}>
        {shopItemsSorted.map(({ category, items }) => (
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
