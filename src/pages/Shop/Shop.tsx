import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { hatData } from 'data/hats';
import ShopItem from 'pages/Shop/ShopItem';
import React, { useEffect, useState } from 'react';
import { getShopItems } from 'utils/db.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: '32px',
    },
    content: {},
    carousel: {},
  })
);

export interface ShopItemData {
  imageUrl: string;
  name: string;
  price: number;
  id: string;
}

const Shop = () => {
  const classes = useStyles();
  const [shopItems, setShopItems] = useState<ShopItemData[]>([]);
  useEffect(() => {
    getShopItems().then(setShopItems);
  }, []);
  return (
    <Container maxWidth='lg' className={classes.container}>
      <Typography variant='h1'>Hats</Typography>
      <Grid container spacing={0}>
        {hatData.slice(0, 4).map((item: ShopItemData, key) => (
          <Grid item key={key} xs={12} sm={6} md={3}>
            <ShopItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
