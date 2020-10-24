import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Categories,
  ShopItemCategory,
  ShopItemData,
} from 'interfaces/shop-item.interface';
import React, { useEffect, useState } from 'react';
import { getShopItems } from 'utils/db.utils';
import ShopItemCarousel from './ShopItemCarousel';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(0,2),
      '&>*': {
        margin: theme.spacing(6, 0),
      },
    },
  })
);

const Shop = () => {
  const classes = useStyles();
  const [shopItems, setShopItems] = useState<ShopItemData[]>([]);
  useEffect(() => {
    getShopItems().then(setShopItems);
  }, []);
  let shopItemsSorted: {
    category: ShopItemCategory;
    items: ShopItemData[];
  }[] = Categories.map((category) => ({
    category,
    items: shopItems.filter((x) => x.category === category),
  }));

  return (
    <Container className={classes.container}>
      {shopItemsSorted.map(({ category, items }) => (
        <ShopItemCarousel
          title={category}
          key={category}
          items={items}
          category={category}
        />
      ))}
    </Container>
  );
};

export default Shop;
