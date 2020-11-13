import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { getShopItemById, ShopItemModel } from 'models/shop-item/shop-item.db';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Routes } from 'Router';
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

interface Props {
  item?: ShopItemModel;
}

const ItemDetailsPage = (props: Props) => {
  const classes = useStyles();
  let { id } = useParams<{ id: string }>();
  id = id || '';
  let history = useHistory();
  let [item, setItem] = React.useState<ShopItemModel | undefined>(undefined);

  function goHome() {
    console.log('Going Home');
    history.push(Routes.Homepage);
  }
  
  console.log('id', id);
  
  React.useEffect(() => {
    if (props.item) setItem(props.item);
    else if (id !== '')
      getShopItemById(id).then((itemDoc) => {
        if (itemDoc) setItem(itemDoc);
        else goHome();
      });
    else goHome();
  }, [id, setItem, props, history]);

  if (!item) {
    return <div></div>;
  }

  return (
    <Grid container item spacing={1} className={classes.container}>
      <Grid item sm={5} xs={12} className={classes.imageGalleryContainer}>
        <ImageGallery imageUrls={item.imageUrls} />
      </Grid>
      <Grid item sm={7} xs={12} className={classes.detailsContainer}>
        <ItemDetailsText item={item} />
      </Grid>
    </Grid>
  );
};

export default ItemDetailsPage;
