import React from 'react';
import { hatData } from 'data/hats';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import ShopItem from 'pages/Shop/ShopItem';
import { firestore } from 'utils/firebase.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
    content: {},
    carousel: {},
  })
);

export interface ShopItemData {
  img: string;
  name: string;
  price: number;
  id: string;
}

// log shop items
let shopItems = ['hello world'];
firestore
  .collection('items')
  .get()
  .then((x) => {
    x.forEach((doc) => console.log(doc.data()));
  });
console.log('shopItems', shopItems);

const Shop = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <h1>Hats</h1>
      <Grid container className={classes.carousel} spacing={2}>
        {hatData.slice(0, 4).map((item: ShopItemData, key) => (
          <Grid item key={key} xs={12} sm={6} md={3} >
            <ShopItem {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shop;
