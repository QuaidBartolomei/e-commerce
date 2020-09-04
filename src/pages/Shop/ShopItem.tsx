import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ShopItemData } from 'pages/Shop/Shop';
import Button from '@material-ui/core/Button/Button';
import { useUserDispatch } from 'UserContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '100%',
      minHeight: '240px',
      maxHeight: '350px',
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      backgroundPositionX: 'center',
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
  const addItemToCart = () =>
    userDispatch({
      type: 'add_item',
      payload: { ...item, quantity: 1 },
    });
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${item.img})`,
        }}
        className={classes.image}
      />
      <div className={classes.label}>
        <span>{item.name}</span>
        <Button onClick={addItemToCart}>Add To Cart</Button>
        <span>
          {'$'}
          {item.price}
        </span>
      </div>
    </div>
  );
};

export default ShopItem;
