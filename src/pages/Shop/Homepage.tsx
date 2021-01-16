import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Categories, getShopItems, ShopItemCategory, ItemData } from 'models/shop-item/shop-item.db';
import React, { useEffect, useState } from 'react';
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

const Homepage = () => {
  const classes = useStyles();
  const [shopItems, setShopItems] = useState<ItemData[]>([]);
  useEffect(() => {
    getShopItems().then(setShopItems);
  }, []);
  let shopItemsSorted: {
    category: ShopItemCategory;
    items: ItemData[];
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

export default Homepage;
