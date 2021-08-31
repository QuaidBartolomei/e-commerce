import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ItemDetailsText from 'components/ShopItem/ItemDetailsText';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Product } from 'interfaces/shopItem.interface';
import { GetServerSideProps } from 'next';
import React from 'react';
import { DbCollections, getDataById } from 'utils/firebase.utils';

const useStyles = makeStyles(theme =>
  createStyles({
    itemDetailsPage: {
      width: '100%',
      height: '100%',
      minHeight: '100vh',
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

type Params = {
  item: string;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { item: itemId } = context.params as Params;
  const item = await getDataById(DbCollections.Items, itemId);
  if (!item) return { notFound: true };
  return { props: { item } };
};

interface Props {
  item: Product;
}

export default function ItemPage({ item }: Props) {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid container item className={classes.itemDetailsPage}>
        <Grid item sm={5} xs={12} className={classes.imageGalleryContainer}>
          <ImageGallery imageUrls={item.imageUrls} />
        </Grid>
        <Grid item sm={7} xs={12} className={classes.detailsContainer}>
          <ItemDetailsText item={item} />
        </Grid>
      </Grid>
    </Container>
  );
}
