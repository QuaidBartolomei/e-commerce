import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ShopItemData } from 'pages/Shop/Shop';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '8px',
    },
    imageContainer: {
      overflow: 'hidden',
      width: '100%',
      height: '240px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundPosition: 'center',
    },
    image: {
      maxHeight: '200%',
      maxWidth: '200%',
    },
    label: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
);

const ShopItem = (item: ShopItemData) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  return (
    <Link to={`${Routes.Product}/1`}>
      <Paper
        className={classes.container}
        elevation={isHover ? 1 : 0}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={classes.imageContainer}
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: 'cover',
          }}
        />
        <CardContent className={classes.label}>
          <span>{item.name}</span>
          <span>
            {'$'}
            {item.price}
          </span>
        </CardContent>
      </Paper>
    </Link>
  );
};

export default ShopItem;
