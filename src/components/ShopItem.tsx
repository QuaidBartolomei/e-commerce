import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ShopItemData } from 'pages/Shop';

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
        <span>
          {'$'}
          {item.price}
        </span>
      </div>
    </div>
  );
};

export default ShopItem
