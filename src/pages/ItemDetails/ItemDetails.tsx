import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Routes } from 'Router';
import { getShopItemById } from 'utils/db.utils';
import ItemDetailsText from './ItemDetailsText';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: '100%',
      padding: theme.spacing(4, 0),
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

const ItemDetails = () => {
  const classes = useStyles();
  let { id } = useParams<{ id: string }>();
  let history = useHistory();
  let [item, setItem] = React.useState<ShopItemData>({
    name: 'Dumb item',
    id: '1',
    imageUrl: '',
    price: 99,
    category: 'Hat',
    size: 'S',
  });

  React.useEffect(() => {
    getShopItemById(id).then(setItem);
  }, []);

  if (!item) {
    history.push(Routes.Homepage);
    return <div></div>;
  }

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
