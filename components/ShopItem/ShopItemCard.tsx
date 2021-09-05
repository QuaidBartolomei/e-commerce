import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'components/Link';
import { Product } from 'interfaces/shopItem.interface';
import React from 'react';
import routes from 'utils/routes';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { formatItemPrice } from 'utils/shopItem.util';
import StarIcon from '@mui/icons-material/Star';

const ShopItemCard = ({ item }: { item: Product }) => {
  const { name, imageUrls } = item;
  const image = imageUrls[0];

  const Rating = () => (
    <Box>
      <StarIcon sx={{fontSize:16}} />
      <StarIcon sx={{fontSize:16}} />
      <StarIcon sx={{fontSize:16}} />
      <StarIcon sx={{fontSize:16}} />
      <StarIcon sx={{fontSize:16}} />
    </Box>
  );
  const Name = () => <Typography variant='h5'>{name}</Typography>;
  const Price = () => <Typography>{formatItemPrice(item)}</Typography>;

  const Thumbnail = () => (
    <Box
      sx={{
        position: 'relative',
        flexGrow: 1,
      }}
    >
      <Image src={image} layout='fill' alt={name} />
    </Box>
  );

  const Details = () => (
    <Stack direction='column'>
      <Name />
      <Rating />
      <Price />
    </Stack>
  );

  return (
    <Link
      href={routes.item(item.id)}
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          minWidth: {
            xs: 150,
            sm: 200,
            md: 250,
          },
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
      <Thumbnail />
      <Details />
    </Link>
  );
};

export default ShopItemCard;
