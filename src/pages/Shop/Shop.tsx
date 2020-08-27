import React from 'react';
import { hatData } from 'assets/hats/hats';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import ShopItem from 'pages/Shop/ShopItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: '100vw',
    },
    content: {
    },
    carousel: {},
  })
);

export interface ShopItemData { img: string; name: string; price: number }

const Shop = () => {
  const classes = useStyles();
  return (
      <div className={classes.content}>
        <h1>Hats</h1>
        <Grid container className={classes.carousel} spacing={2}>
          {hatData.slice(0, 4).map((item: ShopItemData, key) => (
            <Grid item key={key} xs={3}>
              <ShopItem {...item} />
            </Grid>
          ))}
        </Grid>
      </div>
  );
};



export default Shop;
