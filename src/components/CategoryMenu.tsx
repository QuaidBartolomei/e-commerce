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
      width: '100%',
      backgroundColor: theme.palette.grey[400],
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
);

const CategoryMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={Spacing}>
        {[
          {
            name: 'Hats',
            image: hats_img,
          },
          {
            name: 'Shirts',
            image: shirts_img,
          },
        ].map((props, key) => (
          <Grid item xs>
            <CategoryMenuItem {...props} key={key} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryMenu;
