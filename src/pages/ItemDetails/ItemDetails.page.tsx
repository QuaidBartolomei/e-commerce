import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ItemImagesSection from 'components/ImageGallery/ImageGallery';
import { getShopItemById, ItemData } from 'models/shop-item/shop-item.db';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Routes } from 'Router';
import ItemDetailsText from './ItemDetailsText';
import { ItemDetailsProvider } from './useItemDetails';

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

interface Props {}

const ItemDetailsPage = (props: Props) => {
  const classes = useStyles();
  const { id = '' } = useParams<{ id: string }>();
  const history = useHistory();
  const [item, setItem] = useState<ItemData | undefined>(undefined);

  React.useEffect(() => {
    if (id === '') return history.push(Routes.Homepage);
    getShopItemById(id).then((itemData) => {
      if (itemData) setItem(itemData);
    });
  }, [id, setItem, history]);

  if (!item) {
    return <div></div>;
  }

  return (
    <ItemDetailsProvider item={item}>
      <Grid container item spacing={1} className={classes.container}>
        <Grid item sm={5} xs={12} className={classes.imageGalleryContainer}>
          <ItemImagesSection />
        </Grid>
        <Grid item sm={7} xs={12} className={classes.detailsContainer}>
          <ItemDetailsText item={item} />
        </Grid>
      </Grid>
    </ItemDetailsProvider>
  );
};

export default ItemDetailsPage;
