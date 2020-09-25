import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { hatData, shirtData } from 'data/ShopItems';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailsText from './ItemDetailsText';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: '100%',
      '&>*': {},
    },
    imageGalleryContainer: {},
    formItem: {},
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        marginBottom: theme.spacing(1),
      },
    },
  })
);

const defaultItem: ShopItemData = {
  id: '1',
  imageUrl: '',
  name: 'Dumb Hat',
  price: 99,
  category: 'Hat',
};

const ItemDetails = () => {
  let { id } = useParams<{ id: string }>();

  let item = [...shirtData, ...hatData].find((x) => x.id === id) || defaultItem;

  const classes = useStyles();
  return (
    <Grid container item spacing={1} className={classes.container}>
      <Grid item sm={5} xs={12} className={classes.imageGalleryContainer}>
        <ImageGallery mainImage={item.imageUrl} />
      </Grid>
      <Grid item sm={7} xs={12} className={classes.detailsContainer}>
        <ItemDetailsText item={item} />
      </Grid>
    </Grid>
  );
};

export default ItemDetails;
