import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { hatData } from 'data/ShopItems';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import React, { useEffect, useState } from 'react';
import { getShopItems } from 'utils/db.utils';
import { shirtData } from '../../data/ShopItems';
import ShopItemCarousel from './ShopItemCarousel';

const Spacing = 1;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(Spacing),
      '&>*': {
        marginBottom: theme.spacing(5),
      },
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
  return (
    <Container maxWidth='lg' className={classes.container} disableGutters>
      <ShopItemCarousel
        title='Hats'
        items={hatData}
        category={'Hat'}
      ></ShopItemCarousel>
      <ShopItemCarousel
        title='Shirts'
        items={shirtData}
        category={'Shirt'}
      ></ShopItemCarousel>
    </Container>
  );
};

export default Shop;
