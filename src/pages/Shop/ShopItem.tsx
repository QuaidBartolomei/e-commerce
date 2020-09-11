import Button from '@material-ui/core/Button/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { ShopItemData } from 'pages/Shop/Shop';
import React, { useState } from 'react';
import { useUserDispatch } from 'UserContext';
import { Routes } from 'Router';
import { Link } from 'react-router-dom';

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
  const userDispatch = useUserDispatch();
  const [isHover, setIsHover] = useState(false);
  const addItemToCart = () =>
    userDispatch({
      type: 'add_item',
      payload: { ...item, quantity: 1 },
    });
  return (
    <Link to='#'>
      <Paper
        className={classes.container}
        elevation={isHover ? 1 : 0}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className={classes.imageContainer}>
          <img className={classes.image} src={item.img} alt='Paella dish' />
        </div>
        <CardContent className={classes.label}>
          <span>{item.name}</span>
          <span>
            {'$'}
            {item.price}
          </span>
        </CardContent>
        <CardActions>
          <Button onClick={addItemToCart} style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                verticalAlign: 'center',
                width: '100%',
              }}
            >
              <AddCircleOutlineIcon />
              <span>Add To Cart</span>
            </div>
          </Button>
        </CardActions>
      </Paper>
    </Link>
  );
};

export default ShopItem;
