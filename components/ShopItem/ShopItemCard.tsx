import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'components/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Product } from 'interfaces/shopItem.interface';
import React, { useState } from 'react';
import routes from 'utils/routes';

const ShopItemCard = ({ item }: { item: Product }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={routes.item(item.id)}>
      <Paper
        sx={{
          p: 1,
          m: 1,
          width: 240,
        }}
        elevation={isHover ? 5 : 1}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Box
          sx={{
            width: '100%',
            height: '240px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${item.imageUrls[0]})`,
          }}
        />
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            p: 1,
          }}
        >
          <Typography>{item.name}</Typography>
          <Typography>{`$${item.price}`}</Typography>
        </Container>
      </Paper>
    </Link>
  );
};

export default ShopItemCard;
