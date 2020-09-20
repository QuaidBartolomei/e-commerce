import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'components/ImageGallery';
import { ShopItemData } from 'pages/Shop/Shop';
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailsText from './ItemDetailsText';


const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      '&>*': {},
    },
    imageGalleryContainer: {},
    formItem: {},
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
  })
);

const item: ShopItemData = {
  id: '1',
  imageUrl: '',
  name: 'Dumb Hat',
  price: 99,
};


const ItemDetails = () => {
  let { id } = useParams<{ id: string }>();

  const classes = useStyles();
  return (
    <Grid container item spacing={2} className={classes.container}>
      <Grid item md={5} xs={12} className={classes.imageGalleryContainer}>
        <ImageGallery />
      </Grid>
      <Grid item md={7} xs={12} className={classes.detailsContainer}>
        <ItemDetailsText item={item} />
      </Grid>
    </Grid>
  );
};

export default ItemDetails;
