import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ItemDetailsText from 'components/ShopItem/ItemDetailsText';
import { Product } from 'interfaces/shopItem.interface';
import { GetServerSideProps } from 'next';
import React from 'react';
import { DbCollections, getFirestore } from 'utils/firebase.utils';

const useStyles = makeStyles(theme =>
  createStyles({
    itemDetailsPage: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(4, 0),
      flexGrow: 1,
    },
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        marginBottom: theme.spacing(1),
      },
    },
    imageGalleryContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface Props {
  item: Product;
}

export default function ItemPage({ item }: Props) {
  const classes = useStyles();
  return (
    <Grid container item  className={classes.itemDetailsPage}>
      <Grid item md={5} xs={12} className={classes.imageGalleryContainer}>
        <ImageGallery imageUrls={item.imageUrls} />
      </Grid>
      <Grid item md={7} xs={12} className={classes.detailsContainer}>
        <ItemDetailsText item={item} />
      </Grid>
    </Grid>
  );
}

type Params = {
  item: string;
};
export const getServerSideProps: GetServerSideProps = async context => {
  const firestore = getFirestore();
  const { item: itemId } = context.params as Params;
  const itemDoc = await firestore
    .collection(DbCollections.Items)
    .doc(itemId)
    .get();
  const item = itemDoc.data() as Product;
  if (!item) return { notFound: true };
  return { props: { item } };
};
