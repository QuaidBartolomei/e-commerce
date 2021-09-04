import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ItemDetailsText from 'components/ShopItem/ItemDetailsText';
import { Product } from 'interfaces/shopItem.interface';
import { GetServerSideProps } from 'next';
import React from 'react';
import { DbCollections, getDataById } from 'utils/firebase.utils';

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
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          py: 4,
          flexGrow: 1,
        }}
      >
        <Grid
          item
          sm={5}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ImageGallery imageUrls={item.imageUrls} />
        </Grid>
        <Grid
          item
          sm={7}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '>*': {
              mb: 1,
            },
          }}
        >
          <ItemDetailsText item={item} />
        </Grid>
      </Grid>
    </Container>
  );
}
