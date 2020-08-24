import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import hat_img from 'assets/hat.jpg';
import jeans_img from 'assets/jeans.jpg';
import mens_img from 'assets/mens-sweaters.jpg';
import womens_img from 'assets/woman-skirt.jpg';
import shoes_img from 'assets/shoes.jpg';
import Tile from './Tile';

export interface TileData {
  img: string;
  title: string;
  cols?: number;
}

const tileData: TileData[] = [
  {
    img: mens_img,
    title: 'Men',
    cols: 2,
  },
  {
    img: womens_img,
    title: 'Women',
    cols: 2,
  },
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
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '7.5px 0',
  },
  gridList: {
    width: '96%',
  },
}));

const Directory = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={620}
        className={classes.gridList}
        cols={4}
        spacing={15}
      >
        {tileData.map(Tile)}
      </GridList>
    </div>
  );
};

export default Directory;
