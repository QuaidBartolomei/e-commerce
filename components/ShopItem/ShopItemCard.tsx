import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'components/Link';
import { Product } from 'interfaces/shopItem.interface';
import React from 'react';
import routes from 'utils/routes';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { formatItemPrice } from 'utils/shopItem.util';

const ShopItemCard = ({ item }: { item: Product }) => {
  const { name, imageUrls } = item;
  const image = imageUrls[0];

  const Rating = () => <Typography>{`Rating`}</Typography>;
  const Name = () => <Typography>{name}</Typography>;
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
      <Stack
        sx={{
          height: '100%',
          width: '100%',
        }}
        direction='column'
      >
        <Thumbnail />
        <Details />
      </Stack>
    </Link>
  );
};

export default ShopItemCard;
