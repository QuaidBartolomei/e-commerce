import React from 'react';
import { GridListTile, makeStyles } from '@material-ui/core';
import { TileData } from 'components/Directory';

const Tile = (tile: TileData) => {
  const useStyles = makeStyles((theme) => ({
    tile: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white',
      $nest: {
        '&>*': {
          width: '100%',
        },
      },
    },
  }));
  const classes = useStyles();
  return (
    <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.tile}>
      <img
        src={tile.img}
        alt={tile.title}
        style={{
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        Hello
      </div>
    </GridListTile>
  );
};

export default Tile;
