import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import hats_img from 'assets/categories/hats.jpg';
import shirts_img from 'assets/shirts/black-shirt.jpg';
import React from 'react';
import CategoryMenuItem from './CategoryMenuItem';

const Spacing = 1;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      width: '100%',
      backgroundColor: theme.palette.grey[400],
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

const CategoryMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {[
        {
          name: 'Hats',
          image: hats_img,
        },
        {
          name: 'Hats',
          image: hats_img,
        },
        {
          name: 'Hats',
          image: hats_img,
        },
        {
          name: 'Hats',
          image: hats_img,
        },
        {
          name: 'Shirts',
          image: shirts_img,
        },
      ].map((props, key) => (
        <CategoryMenuItem {...props} key={key} />
      ))}
    </div>
  );
};

export default CategoryMenu;
