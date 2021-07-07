import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ItemDetailsText from 'components/ItemDetailsText';
import { Categories, Product } from 'interfaces/shopItem.interface';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { getShopItemById, getShopItems } from 'utils/shopItem.util';
import firebase, { DbCollections, initFirebase } from 'utils/firebase.utils';

initFirebase();
const firestore = firebase.firestore();
const useStyles = makeStyles(theme =>
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
  item: Product;
}

export default function ItemPage({ item }: Props) {
  const classes = useStyles();

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
}

interface IParams extends ParsedUrlQuery {
  item: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const itemsCollection = await firestore.collection(DbCollections.Items).get();
  const slugs: string[] = itemsCollection.docs.map(doc => doc.id);
  const paths = slugs.map(slug => ({
    params: { item: slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
  const { item: itemId } = context.params as IParams;
  const itemDoc = await firestore
    .collection(DbCollections.Items)
    .doc(itemId)
    .get();
  const item = itemDoc.data() as Product;
  if (!item) {
    return {
      notFound: true,
    };
  }
  const props: Props = { item };
  return { props };
};
