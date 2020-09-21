import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import Box from '@material-ui/core/Box';
import ShopItem from 'pages/Shop/ShopItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      overflowX: 'scroll',
      display: 'flex',
      flexDirection: 'row',
    },
  })
);

const Carousel = ({ items }: { items: ShopItemData[] }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {items.map((item, key) => (
        <ShopItem key={key} {...item} />
      ))}
    </Box>
  );
};

export default Carousel;
