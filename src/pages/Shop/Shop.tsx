import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ShopItemData } from 'interfaces/shop-item.interface';
import React, { useEffect, useState } from 'react';
import { getShopItems } from 'utils/db.utils';
import ShopItemCarousel from './ShopItemCarousel';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
    },
    content: {},
    carousel: {},
  })
);

const Shop = () => {
  const classes = useStyles();
  const [shopItems, setShopItems] = useState<ShopItemData[]>([]);
  useEffect(() => {
    getShopItems().then(setShopItems);
  }, []);
  let hatData = React.useMemo(() => {
    return shopItems.filter((x) => x.category === 'Hat');
  }, [shopItems]);
  let shirtData = React.useMemo(() => {
    return shopItems.filter((x) => x.category === 'Shirt');
  }, [shopItems]);
  return (
    <Container maxWidth='lg' className={classes.container} disableGutters>
      <ShopItemCarousel title='Hats' items={hatData} category={'Hat'} />
      <ShopItemCarousel title='Shirts' items={shirtData} category={'Shirt'} />
    </Container>
  );
};

export default Shop;
