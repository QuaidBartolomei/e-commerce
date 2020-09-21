import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Link from '@material-ui/core/Link/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Carousel from 'components/Carousel';
import { hatData } from 'data/hats';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import React, { useEffect, useState } from 'react';
import { getShopItems } from 'utils/db.utils';

const Spacing = 1;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(Spacing),
    },
    content: {},
    carousel: {},
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
  })
);

const Shop = () => {
  const classes = useStyles();
  const [shopItems, setShopItems] = useState<ShopItemData[]>([]);
  useEffect(() => {
    getShopItems().then(setShopItems);
  }, []);
  return (
    <Container maxWidth='lg' className={classes.container} disableGutters>
      <Box className={classes.header}>
        <Typography component='h1' variant='h3'>
          Hats
        </Typography>
        <Link
          href='#'
          variant='h6'
          style={{
            verticalAlign: 'baseline',
          }}
        >
          See all
        </Link>
      </Box>
      <Carousel items={hatData} />
    </Container>
  );
};

export default Shop;
