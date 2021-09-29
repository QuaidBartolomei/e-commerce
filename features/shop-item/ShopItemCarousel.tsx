import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'components/Link';
import ShopItemCard from 'features/shop-item/ShopItemCard';
import { Product, ShopItemCategory } from 'interfaces/shopItem.interface';
import React from 'react';
import routes from 'utils/routes';

interface Props {
  title: string;
  items: Product[];
  category: ShopItemCategory;
}

export default function ShopItemCarousel(props: Props) {
  const { title, items, category } = props;
  if (items.length === 0) return <div></div>;

  const Title = () => (
    <Link href={routes.category(category)}>
      <Typography component='h2' variant='h4'>
        {title}
      </Typography>
    </Link>
  );

  const CategoryLink = () => (
    <Link
      href={routes.category(category)}
      sx={{
        verticalAlign: 'baseline',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Typography variant='h6'>{'See all'}</Typography>
      <NavigateNextIcon />
    </Link>
  );

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between'>
        <Title />
        <CategoryLink />
      </Stack>
      <Stack
        direction='row'
        spacing={1}
        sx={{
          overflowX: 'scroll',
          mr: 1,
          py: 2,
        }}
      >
        {items.map((item, key) => (
          <ShopItemCard key={key} {...{ item }} />
        ))}
      </Stack>
    </Box>
  );
}
