import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Link from '@material-ui/core/Link/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'components/Carousel';
import { hatData } from 'data/ShopItems';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import React, { useEffect, useState } from 'react';
import { Routes } from 'Router';
import { getShopItems } from 'utils/db.utils';
import { shirtData } from '../../data/ShopItems';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Spacing = 1;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(Spacing),
      '&>*': {
        marginBottom: theme.spacing(5),
      },
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
      <ShopItemCarousel title='Hats' items={hatData}></ShopItemCarousel>
      <ShopItemCarousel title='Shirts' items={shirtData}></ShopItemCarousel>
    </Container>
  );
};

const ShopItemCarousel = ({
  title,
  items,
}: {
  title: string;
  items: ShopItemData[];
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.header}>
        <Typography component='h2' variant='h4'>
          {title}
        </Typography>
        <Link
          href={`${Routes.Category}/hats`}
          variant='h6'
          style={{
            verticalAlign: 'baseline',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {'See all'}
          <NavigateNextIcon />
        </Link>
      </Box>
      <Carousel items={items} />
    </Box>
  );
};

export default Shop;
