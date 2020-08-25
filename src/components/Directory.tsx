import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import hat_img from 'assets/hat.jpg';
import jeans_img from 'assets/jeans.jpg';
import mens_img from 'assets/mens-sweaters.jpg';
import womens_img from 'assets/woman-skirt.jpg';
import shoes_img from 'assets/shoes.jpg';
import accessory_img from 'assets/accessory.jpg';
import DirectoryItem, { DirectoryItemProps } from './DirectoryItem';

const topRowItems: DirectoryItemProps[] = [
  {
    img: mens_img,
    title: 'Men',
  },
  {
    img: womens_img,
    title: 'Women',
    posY: 'top',
  },
];

const bottomRowItems: DirectoryItemProps[] = [
  {
    img: hat_img,
    title: 'Hat',
  },
  {
    img: jeans_img,
    title: 'Jeans',
  },
  {
    img: shoes_img,
    title: 'Shoes',
  },
  {
    img: accessory_img,
    title: 'Accessories',
    posY: 'bottom',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      margin: '0 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&>*': {
        margin: '0',
      },
    },
    topRow: {
      flex: 2,
      minHeight: '240px',
    },
    bottomRow: {
      height: '240px',
    },
  })
);

const Directory = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Top Row */}
      <Grid container spacing={2} className={classes.topRow}>
        {topRowItems.map((item: DirectoryItemProps, i) => (
          <Grid key={i} item xs={6}>
            <DirectoryItem {...item}></DirectoryItem>
          </Grid>
        ))}
      </Grid>
      {/* Bottom Row */}
      <Grid container spacing={2} className={classes.bottomRow}>
        {bottomRowItems.map((item: DirectoryItemProps, i) => (
          <Grid key={i} item xs={3}>
            <DirectoryItem {...item}></DirectoryItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Directory;
