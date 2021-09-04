import Box from '@mui/material/Box';
import Link from 'components/Link';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShopItemCard from 'components/ShopItem/ShopItemCard';
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

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Typography
          component='h2'
          variant='h4'
          sx={{
            ml: 1,
          }}
        >
          {title}
        </Typography>
        <Link
          href={routes.category(category)}
          variant='h6'
          sx={{
            verticalAlign: 'baseline',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {'See all'}
          <NavigateNextIcon />
        </Link>
      </Box>
      <Box
        sx={{
          overflowX: 'scroll',
          display: 'flex',
          flexDirection: 'row',
          mr: 1,
        }}
      >
        {items.map((item, key) => (
          <ShopItemCard key={key} {...{ item }} />
        ))}
      </Box>
    </Box>
  );
}
