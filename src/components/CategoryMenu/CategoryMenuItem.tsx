import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ShopItemCategory } from 'interfaces/shop-item.interface';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: theme.palette.grey[200],
    },
    image: {
      height: 120,
      width: 140,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: 4,
      marginBottom: theme.spacing(1),
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  })
);

const CategoryMenuItem = (props: {
  name: string;
  image: string;
  category: ShopItemCategory;
}) => {
  const { name, image, category } = props;
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  return (
    <Link to={`${Routes.Category}/${category}`}>
      <Typography component='h3' variant='h5'>
        {name}
      </Typography>
    </Link>
  );
};

export default CategoryMenuItem;
