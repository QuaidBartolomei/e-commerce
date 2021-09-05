import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Product, ShopItemCategory } from 'interfaces/shopItem.interface';
import Image from 'next/image';
import React from 'react';
import { getShopItemsByCategory, priceToString } from 'utils/shopItem.util';

interface CategoryPageProps {
  items: Product[];
}

export default function CategoryPage({ items }: CategoryPageProps) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  function ItemList() {
    return (
      <Container maxWidth='xl'>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ImageList
            variant='standard'
            sx={{ width: '100%' }}
            gap={12}
            cols={lg ? 4 : md ? 3 : sm ? 3 : 2}
            rowHeight={'auto'}
          >
            {items.map(({ imageUrls, name, id, price }) => (
              <ImageListItem key={id}>
                <Box
                  sx={{
                    minHeight: {
                      xs: 150,
                      sm: 200,
                      md: 250,
                    },
                    position: 'relative',
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={imageUrls[0]}
                    alt={name}
                    placeholder='empty'
                    layout='fill'
                    objectFit='cover'
                  />
                </Box>
                <ImageListItemBar
                  title={<Typography variant='h5'>{name}</Typography>}
                  subtitle={<Typography>{priceToString(price)}</Typography>}
                  position='below'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ItemList />
    </Box>
  );
}

interface Context {
  params: { category: string };
}
export const getServerSideProps = async ({ params }: Context) => {
  const { category } = params;
  const items = await getShopItemsByCategory(category as ShopItemCategory);
  const props = { items };
  return { props };
};
