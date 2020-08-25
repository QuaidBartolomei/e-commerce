import React from 'react';
import Navbar from 'components/Navbar';
import { hatData } from 'assets/hats/hats';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import ShopItem from 'components/ShopItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100vw',
      margin: '0',
    },
    content: {
      height: '100%',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
    },
    carousel: {},
  })
);

export interface ShopItemData { img: string; name: string; price: number }

const Shop = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar></Navbar>
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
    </div>
  );
};



export default Shop;
