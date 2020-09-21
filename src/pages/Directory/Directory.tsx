import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import hats_img from 'assets/hats.jpg';
import jeans_img from 'assets/jeans.jpg';
import mens_img from 'assets/mens-sweaters.jpg';
import womens_img from 'assets/woman-skirt.jpg';
import shoes_img from 'assets/shoes.jpg';
import accessory_img from 'assets/accessory.jpg';
import DirectoryItem, { DirectoryItemProps } from './DirectoryItem';
import { navbarHeight } from 'components/Navbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

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
    img: hats_img,
    title: 'Hats',
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

const GridSpacing = 1;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: `calc(100vh - ${navbarHeight})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&>*': {
        margin: '0',
      },
    },
    container: {
      height: '100%',
      padding: theme.spacing(GridSpacing),
    },
    topRow: {
      height: '70%',
    },
    bottomRow: {
      height: '30%',
    },
  })
);

const Directory = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid
        container
        item
        spacing={GridSpacing}
        className={classes.topRow}
        xs={12}
      >
        {topRowItems.map((item: DirectoryItemProps, i) => (
          <Grid key={i} item xs={12} sm={6}>
            <DirectoryItem {...item}></DirectoryItem>
          </Grid>
        ))}
      </Grid>
      {/* Bottom Row */}
      <Grid
        container
        item
        spacing={GridSpacing}
        className={classes.bottomRow}
        xs={12}
      >
        {bottomRowItems.map((item: DirectoryItemProps, i) => (
          <Grid key={i} item xs={6} md={3}>
            <DirectoryItem {...item}></DirectoryItem>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Directory;
