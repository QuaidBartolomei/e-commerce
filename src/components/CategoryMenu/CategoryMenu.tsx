import { createStyles, makeStyles } from '@material-ui/core/styles';
import hats_img from 'assets/categories/hats.jpg';
import shirts_img from 'assets/shirts/black-shirt.jpg';
import { ShopItemCategory } from 'interfaces/shop-item.interface';
import React from 'react';
import CategoryMenuItem from './CategoryMenuItem';

const Spacing = 1;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      width: '100%',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDireciton: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
  })
);

const data: { name: string; image: string; category: ShopItemCategory }[] = [
  {
    name: 'Hats',
    image: hats_img,
    category: 'Hat',
  },
  {
    name: 'Hats',
    image: hats_img,
    category: 'Hat',
  },
  {
    name: 'Hats',
    image: hats_img,
    category: 'Hat',
  },
  {
    name: 'Hats',
    image: hats_img,
    category: 'Hat',
  },
  {
    name: 'Shirts',
    image: shirts_img,
    category: 'Shirt',
  },
];

const CategoryMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data.map((props, key) => (
        <CategoryMenuItem {...props} key={key} />
      ))}
    </div>
  );
};

export default CategoryMenu;
